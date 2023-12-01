import { task } from "hardhat/config";

import {
  DEPLOY_SEQUENCE,
  NeokingdomDAOHardhat,
  SETUP_SEQUENCE,
  generateDeployContext,
} from "../lib";
import { DAOConfig, generateSetupContext } from "../lib/internal/types";
import { SETUP_MOCK_SEQUENCE } from "../lib/sequence/deploy";
import { SETUP_SEQUENCE_VIGODARZERE, finalizeACL } from "../lib/sequence/post";
import { SETUP_SEQUENCE_TESTNET } from "../lib/sequence/setup";
import { question } from "../lib/utils";

const MULTISIG_MAINNET = "0xd232121c41EF9ad4e4d0251BdCbe60b9F3D20758";
const MULTISIG_TESTNET = "0x7549fe2ED3c16240f97FE736146347409C6dD81D";

task("deploy:mocks", "Deploy DAO Mocks")
  .addFlag("verify", "Verify contracts")
  .addFlag("restart", "Start a new deployment from scratch")
  .addOptionalParam("configFile", "Config file", "../config.js")
  .setAction(
    async (
      {
        verify,
        restart,
        configFile,
      }: { verify: boolean; restart: boolean; configFile: string },
      hre
    ) => {
      let config = require(configFile) as DAOConfig;
      if (restart) await hre.run("compile", { force: true });

      const neokingdom = await NeokingdomDAOHardhat.initialize(hre, {
        verifyContracts: verify,
        verbose: true,
      });

      await neokingdom.run(
        generateDeployContext(config),
        SETUP_MOCK_SEQUENCE,
        "setup-test-sequence",
        {
          restart,
        }
      );
    }
  );

task("deploy:dao", "Deploy DAO")
  .addFlag("verify", "Verify contracts")
  .addFlag("restart", "Start a new deployment from scratch")
  .addOptionalParam("configFile", "Config file", "../config.js")
  .setAction(
    async (
      {
        verify,
        restart,
        configFile,
      }: { verify: boolean; restart: boolean; configFile: string },
      hre
    ) => {
      let config = require(configFile) as DAOConfig;

      if (restart) await hre.run("compile", { force: true });

      const neokingdom = await NeokingdomDAOHardhat.initialize(hre, {
        verifyContracts: verify,
        verbose: true,
      });

      await neokingdom.run(
        generateDeployContext(config),
        DEPLOY_SEQUENCE,
        "deploy",
        {
          restart,
        }
      );
    }
  );

task("setup:dao", "Set up the DAO")
  .addOptionalParam("configFile", "Config file", "../config.js")
  .setAction(async ({ configFile }: { configFile: string }, hre) => {
    let config = require(configFile) as DAOConfig;
    let sequence = SETUP_SEQUENCE;
    const neokingdom = await NeokingdomDAOHardhat.initialize(hre, {
      verbose: true,
    });
    await neokingdom.run(
      generateSetupContext(config.contributors, hre),
      sequence,
      "setup"
    );
  });

task("setup:test", "Set up the test data for the DAO")
  .addOptionalParam("configFile", "Config file", "../config.js")
  .setAction(async ({ configFile }: { configFile: string }, hre) => {
    let config = require(configFile) as DAOConfig;
    let sequence = SETUP_SEQUENCE_TESTNET;
    const neokingdom = await NeokingdomDAOHardhat.initialize(hre, {
      verbose: true,
    });
    await neokingdom.run(
      generateSetupContext(config.contributors, hre),
      sequence,
      "setup-test"
    );
  });

task("setup:vigodarzere", "Set up the DAO").setAction(async (_, hre) => {
  let sequence = SETUP_SEQUENCE_VIGODARZERE;

  const neokingdom = await NeokingdomDAOHardhat.initialize(hre, {
    verbose: true,
  });
  await neokingdom.run(
    generateSetupContext([], hre),
    sequence,
    "setup-vigodarzere"
  );
});

task("setup:acl", "Set up ACL")
  .addFlag("mainnet", "Go to mainnet")
  .setAction(async ({ mainnet }: { mainnet: boolean }, hre) => {
    let multisig = MULTISIG_TESTNET;
    if (mainnet) {
      multisig = MULTISIG_MAINNET;
    }

    console.log(
      `Transferring rights and ProxyAdmin ownership to ${multisig} on ${
        mainnet ? "Mainnet" : "Testnet"
      }.`
    );
    const answer = await question(
      "This action is irreversible. Please type 'GO' to continue.\n"
    );

    if (answer == "GO") {
      let sequence = finalizeACL(multisig);

      const neokingdom = await NeokingdomDAOHardhat.initialize(hre, {
        verbose: true,
      });
      await neokingdom.run(
        generateSetupContext([], hre),
        sequence,
        "setup-acl"
      );
    }
  });
