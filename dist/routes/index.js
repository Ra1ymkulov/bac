"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_routes_1 = __importDefault(require("../modules/product/product.routes"));
const cors_1 = __importDefault(require("cors"));
const router = (0, express_1.Router)();
const corsConfig = {
    origin: ["http://localhost:3001"],
};
router.use("/product", (0, cors_1.default)(corsConfig), product_routes_1.default);
exports.default = router;
