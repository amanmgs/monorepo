"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.module = exports.div = exports.mul = exports.sub = exports.add = exports.logFxn = exports.msg = void 0;
exports.msg = 'From Shared Folder';
const logFxn = () => {
    console.log('This is a function from shared folder');
};
exports.logFxn = logFxn;
const add = (a, b) => {
    return a + b;
};
exports.add = add;
const sub = (a, b) => {
    return a - b;
};
exports.sub = sub;
const mul = (a, b) => {
    return a * b;
};
exports.mul = mul;
const div = (a, b) => {
    return a / b;
};
exports.div = div;
const module = (a, b) => {
    return a % b;
};
exports.module = module;
