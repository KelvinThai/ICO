const Token = artifacts.require("Token");
const ICO = artifacts.require("ICO");

module.exports =  async (deployer, network, accounts) => {
  await deployer.deploy(Token, "Testing ICO Token", "TIT", "1000000000000000000000");
  const token = await Token.deployed();
  await deployer.deploy(ICO, 5, accounts[1], token.address);
};
