import { Router } from "express";
import userController from "../controllers/user.controller.js";
const router = Router();
// todos los usuarios
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);

export default router;
