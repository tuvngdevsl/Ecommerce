import express from "express";
import productController from "../controllers/productController.js";
import { isAdmin, authMiddleware } from "../middlewares/authMiddleware.js";
import { productImageResize, uploadPhoto } from "../middlewares/uploadImages.js";

const router = express.Router();

router.post("/", authMiddleware, isAdmin, productController.createProduct);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImageResize,
  productController.uploadImage
);
router.put("/wishlist", authMiddleware, productController.addToWishlist);
router.put("/rating", authMiddleware, productController.rating);

router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProductById);
router.put("/:id", authMiddleware, isAdmin, productController.updateProduct);
router.delete("/:id", authMiddleware, isAdmin, productController.deleteProduct);

export default router;
