import { Router } from "express";
import users from "../data/users.js";

const router = Router();

router.get("/", (req, res) => {
  // res.json({ message: "Hola, estás en la página ABOUT" });
  res.render("users", { title: "Lista de usuarios desde el back", users });
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));

  res.render("user-detail", { user });
});

export default router;
