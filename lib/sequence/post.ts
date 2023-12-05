import { upgrades } from "hardhat";

import { IProxyAdmin } from "../../typechain";
import { Sequence, SetupContext } from "../internal/types";
import { ROLES } from "../utils";

async function transferOwnership(address: string) {
  const proxy = (await upgrades.admin.getInstance()) as IProxyAdmin;
  return proxy.transferOwnership(address);
}

export function finalizeACL(multisig: string): Sequence<SetupContext> {
  return [
    (c) => c.daoRoles.grantRole(ROLES.DEFAULT_ADMIN_ROLE, multisig),
    (c) => c.daoRoles.grantRole(ROLES.OPERATOR_ROLE, multisig),
    (c) => c.daoRoles.grantRole(ROLES.RESOLUTION_ROLE, multisig),
    (c) => transferOwnership(multisig),
    (c) => c.daoRoles.revokeRole(ROLES.RESOLUTION_ROLE, c.deployer.address),
    (c) => c.daoRoles.revokeRole(ROLES.OPERATOR_ROLE, c.deployer.address),
    (c) => c.daoRoles.revokeRole(ROLES.DEFAULT_ADMIN_ROLE, c.deployer.address),
  ];
}
