require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remain uncover just castle outer system'; 
let testAccounts = [
"0xed8d38dd6a9b6940fd9460f8806f07a7c00bd3e77d8c0068577131265b04134e",
"0x1029c9b2a597f6f54b95d891e6b5941ef25ad9ee961595476b32f10941e8783a",
"0x618eddd5a90bf232a158026795d16bd7ead41ea5962adb4c90bebcc6ff49d402",
"0x628b838a8e7a84ab58bf38794138eecc9e776bb731cc918c2ea7a626bda556b8",
"0x00ba27b0fd2fbd6f24dca8dd426bdd2c0e5ebb11303ab8fb4b7afa17c06fb2be",
"0xd3c5db3a379601bf54bce27c4fb36ea324a5e27ffe516d1683f1349d7a661f02",
"0x0087f9d70cfc23723b8d2fc0de5bfbc573b48d06f03eb1966f656a79ca14e5b6",
"0x5962ef872f3586ae5c4f9b0551e0f701a95d639f2c9ab04fcedafe308ee7573f",
"0x536a58f123abaaa5490721501c6376991722e4d6e6fe5bf260c6816a84f40053",
"0x313ab20448d17d956780878428aa718ddb10dde9e9d5137afb803028c8dc2df3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

