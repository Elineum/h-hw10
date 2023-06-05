"use strict";

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

const generateKey = (keyLength, allowsSymbs) => {
  let result = "";

  for (let i = 0; i < keyLength; i++) {
    result += allowsSymbs[Math.floor(Math.random() * allowsSymbs.length)];
  }

  return result;
};

const key = generateKey(16, characters);

console.log(key);

/*
console.log(`This is your ${key.length}-characters length key: ${key}
Allowed only this symbols: "${characters}".`);
*/
