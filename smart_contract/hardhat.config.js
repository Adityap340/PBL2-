require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/RLPQ3sdJVpK8lTwQYibu63hvGq6ottq8',
      accounts: ['08403eff4846e3b80a238975cc2221548c574672c5f2169528e0e06ff01d11b9'],
    },
  },
};