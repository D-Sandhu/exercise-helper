"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const PORT = 8000;
(0, express_1.default)()
    .use(express_1.default.json())
    .use((0, helmet_1.default)())
    .use((0, morgan_1.default)("tiny"))
    .get("/", (req, res) => {
    res.send("HELLO from express + TS");
})
    .get("/hi", (req, res) => {
    res.send("hi");
})
    .listen(PORT, () => {
    console.log(`Listening on port ${PORT} ⚡`);
});
