"use strict";


console.log('index 4 : ' ,process.env.NODE_ENV);
if (["production.js", "development.js", "local.js"].indexOf(process.env.NODE_ENV) === -1) {
  process.env.NODE_ENV = "local.js";
}
const envs = require(`./${process.env.NODE_ENV}`);
console.log("envs index.js 9 : " , envs);
Object.assign(process.env, envs);

console.log("envs : ", envs);

module.exports = envs;

// 분기처리 (local, prod, dev)
// 맞는 값을 가져와서 반환
