import { Product } from "../models/product.model.js";


const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, payload: product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


const testPerformance = async (req, res) => {
  const { category } = req.query;
  try {
    // a desarrollar
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


const getProductById = async (req, res) => {
  try {
   //a desarrollar
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


const getCategoryStats = async (req, res) => {
  try {
   //a desarrollar
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


export default {
  createProduct,
  testPerformance,
  getProductById,
  getCategoryStats,
};
