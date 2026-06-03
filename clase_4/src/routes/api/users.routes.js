import { Router } from "express";
import users from "../../data/users.js";
const router = Router();

// traer todos los usuarios
router.get("/", (req, res) => {
  if (!users)
    return res
      .status(400)
      .json({ success: false, error: "no existen usuarios" });

  res.status(200).json({ success: true, payload: users });
});

// solicitar un usuario por id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const user = users.find((us) => us.id === Number(id));
  if (!user)
    return res
      .status(404)
      .json({ success: false, error: `no existe usuario con id: ${id}` });

  res.status(200).json({ success: true, payload: user });
});
// Crear nuevo usuario
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name)
    return res.status(400).json({ success: false, error: "name es requrido" });

  const newUser = {
    id: 3,
    name: name,
  };

  users.push(newUser);
  res.status(201).json({ success: true, payload: newUser });
});

export default router;
