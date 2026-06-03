import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  // res.json({ message: "Hola, estás en la página principal" });
  res.render("home");
});



export default router;
