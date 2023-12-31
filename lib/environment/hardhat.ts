import { HardhatRuntimeEnvironment } from "hardhat/types";

import { Config, NeokingdomDAO } from "../internal/core";
import { ContractNames } from "../internal/types";
import {
  deployContract,
  deployContractProxy,
  getWallet,
  loadContracts,
} from "../utils";

export class NeokingdomDAOHardhat extends NeokingdomDAO {
  hre: HardhatRuntimeEnvironment;

  constructor(hre: HardhatRuntimeEnvironment, config: Config) {
    super(config);
    this.hre = hre;
  }

  static async initialize(
    hre: HardhatRuntimeEnvironment,
    config: Partial<Config> = {}
  ) {
    const deployer = config.deployer ? config.deployer : await getWallet(hre);
    const chainId = config.chainId
      ? config.chainId
      : (await hre.ethers.provider.getNetwork()).chainId;

    const newConfig = this._mergeWithDefaultConfig({
      ...config,
      chainId,
      deployer,
    });

    return new NeokingdomDAOHardhat(hre, newConfig);
  }

  async loadContractsPartial() {
    return loadContracts(this.config.deployer, this.config.chainId);
  }

  async deploy(contractName: ContractNames, args: any[] = []) {
    const contract = await deployContract(
      this.hre,
      contractName,
      this.config.verifyContracts,
      args
    );
    return contract.deployTransaction;
  }

  async deployProxy(contractName: ContractNames, args: any[] = []) {
    const contract = await deployContractProxy(
      this.hre,
      contractName,
      this.config.verifyContracts,
      args
    );
    return contract.deployTransaction;
  }
}
