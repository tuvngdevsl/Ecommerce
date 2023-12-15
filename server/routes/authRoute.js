import express from "express";
import userController from "../controllers/userController.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.put("/password", authMiddleware, userController.updatePassword);
router.get("/", userController.getAllUser);
router.get("/refresh", userController.handleRefreshToken);
router.get("/logout", userController.logout);
router.get("/:id", authMiddleware, isAdmin, userController.getUserById);
router.put("/edit-user", authMiddleware, userController.updateUser);
router.put("/block-user/:id", authMiddleware, isAdmin, userController.blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, userController.unblockUser);
router.delete("/:id", userController.deleteUser);
router.delete("/", userController.deleteAllUser);

export default router;
