import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("home", { title: "Mi chat en vivo" });
});

export default router;
