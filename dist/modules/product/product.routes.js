"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controllers_1 = __importDefault(require("./product.controllers"));
const router = (0, express_1.Router)();
router.get("/get-product", product_controllers_1.default.getProduct);
router.post("/create-product", product_controllers_1.default.createProduct);
router.delete("/delete/:id", product_controllers_1.default.deleteProduct);
exports.default = router;
