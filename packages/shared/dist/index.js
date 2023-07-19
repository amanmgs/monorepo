"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apicall = exports.module = exports.div = exports.mul = exports.sub = exports.add = exports.logFxn = exports.msg = void 0;
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
const apicall = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
    const json = yield response.json();
    console.log(json);
    return json;
});
exports.apicall = apicall;
