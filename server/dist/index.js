"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const word_extractor_1 = __importDefault(require("word-extractor"));
const fileLocation = "C:/Users/HP/Documents/actual reflection.docx";
fs_1.default.readFile(fileLocation, (err, data) => {
    if (err)
        throw err;
    const docReader = new word_extractor_1.default();
    docReader
        .extract(data)
        .then(val => console.log(val.getBody()))
        .catch(e => console.error(e));
});
//# sourceMappingURL=index.js.map