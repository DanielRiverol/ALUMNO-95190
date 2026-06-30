import { Product } from "../models/product.model.js";

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, payload: product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
// cambiar por getProductsByCategory
const testPerformance = async (req, res) => {
  const { category } = req.query;
  try {
    const stats = await Product.find({ category })
      .setOptions({ populate: false })
      .explain("executionStats");

    // auxiliar
    let etapa = stats.queryPlanner.winningPlan.stage;
    if (etapa === "FETCH" && stats.queryPlanner.winningPlan.inputStage) {
      etapa = stats.queryPlanner.winningPlan.inputStage.stage;
    }

    res.status(200).json({
      success: true,
      estrategia: etapa,
      docs_examinados: stats.executionStats.totalDocsExamined,
      tiepo_ms: stats.executionStats.executionTimeMillis,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    //a desarrollar
    const { id } = req.params;
    const product = await Product.findById(id.trim());
    res.status(200).json({ success: true, payload: product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
const getProductByCategory = async (req, res) => {
  try {
    //a desarrollar
    const { category } = req.query;
    const product = await Product.find({ category });

    res.status(200).json({ success: true, payload: product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getCategoryStats = async (req, res) => {
  try {
    //a desarrollar
    const stats = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          precioPromedio: { $avg: "$price" },
          totalProd: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json({ success: true, payload: stats });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export default {
  createProduct,
  testPerformance,
  getProductById,
  getCategoryStats,
  getProductByCategory,
};
