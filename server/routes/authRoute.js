import express from "express";
import userController from "../controllers/userController.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.get("/cart", authMiddleware, userController.getUserCart);
router.post("/register", userController.register);
router.post("/cart", authMiddleware, userController.userCart);
router.post("/login", userController.login);
router.post("/admin-login", userController.adminLogin);
router.post("/forgot-password-token", userController.forgotPasswordToken);
router.put("/reset-password/:token", userController.resetPassword);
router.put("/password", authMiddleware, userController.updatePassword);

router.get("/wishlist", authMiddleware, userController.getWishList);
router.get("/", userController.getAllUser);
router.get("/refresh", userController.handleRefreshToken);
router.get("/logout", userController.logout);
router.get("/:id", authMiddleware, isAdmin, userController.getUserById);
router.put("/save-address", authMiddleware, userController.saveUserAddress);
router.put("/edit-user", authMiddleware, userController.updateUser);
router.put("/block-user/:id", authMiddleware, isAdmin, userController.blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, userController.unblockUser);

router.delete("/empty-cart", authMiddleware, userController.emptyCart);
router.delete("/:id", userController.deleteUser);
router.delete("/", userController.deleteAllUser);

export default router;
