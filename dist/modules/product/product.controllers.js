"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../../config/prisma"));
const getProduct = async (req, res) => {
    try {
        const data = await prisma_1.default.product.findMany();
        res.status(200).json({
            success: true,
            data,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in getAllData: ${error}`,
        });
    }
};
const createProduct = async (req, res) => {
    try {
        const { name, price, image } = req.body;
        if (!name || !price || !image)
            return res
                .status(400)
                .json({ success: false, message: "Все поля должны быть заполнены!" });
        const newObj = {
            name,
            price,
            image,
        };
        const data = await prisma_1.default.product.create({
            data: newObj,
        });
        res.status(200).json({
            success: true,
            message: "Успешно добавлено!",
            data,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in createProduct: ${error}`,
        });
    }
};
const deleteProduct = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = await prisma_1.default.product.delete({
            where: { id },
        });
        res.status(200).json({
            success: true,
            message: "Успешно удалено!",
            data,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in deletUser: ${error}`,
        });
    }
};
exports.default = { getProduct, createProduct, deleteProduct };
