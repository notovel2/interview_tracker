import Base64 from 'crypto-js/enc-base64';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import secret from "../../constant/secret";

export const encrypt = (value: string) => Base64.stringify(hmacSHA512(value, secret.encrypt.privateKey));

export const compare = (password: string, hash: string): boolean => {
    const hashPassword = encrypt(password);
    return hashPassword === hash;
};
