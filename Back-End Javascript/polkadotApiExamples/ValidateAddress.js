const { decodeAddress, encodeAddress } = require('@polkadot/keyring');
const { hexToU8a, isHex } = require('@polkadot/util');

const address = '5FnZKbTCKcinekPEbDMDGSQtxwCyA1wuH4HVXJwbYsXj3vrj';

const isValidAddressPolkadotAddress = () => {
  try {
    encodeAddress(
      isHex(address)
        ? hexToU8a(address)
        : decodeAddress(address)
    );

    return true;
  } catch (error) {
    return false;
  }
};

const isValid = isValidAddressPolkadotAddress();

console.log(isValid);