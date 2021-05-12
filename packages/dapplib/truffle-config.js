require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remember method include process obscure sound'; 
let testAccounts = [
"0xc1a3f142a11e66fb3ed0d6fc2364a474c146a8d6236f426accbc5d6fa5b2d1d3",
"0x65cdfb1bd92a4fbaedf17452a5a27a7fae870df56cdf8d29d6dc2001ee91bc12",
"0xbb3e1fbb59fcad341642b62e206319b91a0bdd0d6311491dd8dfd88793ec9562",
"0x4b4145c28e92d5fb992bfb275c77116afcca972600122c38ce2142bdd37949b2",
"0x23ea894efbc36aca30104383b9f054217280759f68297bda3a39514fdf62d295",
"0x5853a223bc4c4fe4bfab43c6b6da1314f3f1f853799e88931168fa31dd1d9273",
"0xf9c2c230be1fa14193f82d27688fdd3299b69c001dce3e37a189dade08d5fb84",
"0x0e9584511f2471f211e5501da2fcb43a73441e6b08cbacb535c7bff14af66b0f",
"0x5e1c96f480b411b22f1c820449b03adcafb76da2541152be31ef66ea0cffded0",
"0xb790eca6a5b66dcfca9f9334fd7508f0ae11614b71ecdf97b0bf4e237c88959b"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
