import { Request, Response } from "express";
import prisma from "../../config/prisma";

const getProduct = async (req: Request, res: Response) => {
  try {
    const data = await prisma.product.findMany();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in getAllData: ${error}`,
    });
  }
};
const createProduct = async (req: Request, res: Response) => {
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
    const data = await prisma.product.create({
      data: newObj,
    });
    res.status(200).json({
      success: true,
      message: "Успешно добавлено!",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in createProduct: ${error}`,
    });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = await prisma.product.delete({
      where: { id },
    });
    res.status(200).json({
      success: true,
      message: "Успешно удалено!",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in deletUser: ${error}`,
    });
  }
};
export default { getProduct, createProduct, deleteProduct };
