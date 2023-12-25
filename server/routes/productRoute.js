import express from "express";
import productController from "../controllers/productController.js";
import { isAdmin, authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, isAdmin, productController.createProduct);
router.put("/wishlist", authMiddleware, productController.addToWishlist);
router.put("/rating", authMiddleware, productController.rating);
router.get("/:id", productController.getProductById);
router.get("/", productController.getAllProduct);
router.put("/:id", authMiddleware, isAdmin, productController.updateProduct);
router.delete("/:id", authMiddleware, isAdmin, productController.deleteProduct);

export default router;
