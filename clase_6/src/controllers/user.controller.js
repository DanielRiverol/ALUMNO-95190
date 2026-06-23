import { User } from "../models/user.model.js";
// traer todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({ success: true, payload: users });
  } catch (error) {
    res.status(500).json({ sucess: false, error: error.message });
  }
};
// traer por ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);

    res.status(200).json({ success: true, payload: user });
  } catch (error) {
    res.status(500).json({ sucess: false, error: error.message });
  }
};
// crea usuario
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // validar campos vacios
    // db.collection("users").insertOne({name, email, passowrd})
    const user = await User.create({ name, email, password });
    res.status(201).json({ success: true, payload: user });
  } catch (error) {
    res.status(500).json({ sucess: false, error: error.message });
  }
};
// actualizar usuario
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ success: true, payload: user });
  } catch (error) {
    res.status(500).json({ sucess: false, error: error.message });
  }
};

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser
};
