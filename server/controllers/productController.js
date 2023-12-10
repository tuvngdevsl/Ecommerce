import Product from "../models/ProductModel.js";
import asyncHandler from "express-async-handler";
import httpStatusCode from "../utils/httpStatusCode.js";
import slugify from "slugify";

const productController = {
  //Create Product
  createProduct: asyncHandler(async (req, res) => {
    try {
      if (req.body.title) {
        req.body.slug = slugify(req.body.title);
      }

      const newProduct = await Product.create(req.body);
      res.status(httpStatusCode.Created).json({
        message: "Create new product successfully!",
        data: newProduct
      });
    } catch (error) {
      throw new Error(error);
    }
  }),
  // Get a Product by Id
  getProductById: asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);
      if (!product) {
        res.status(httpStatusCode.Not_Found).json({
          message: "Product not found"
        });
      }
      res.status(httpStatusCode.OK).json({
        message: "Find product successfully",
        data: product
      });
    } catch (error) {
      throw new Error(error);
    }
  }),
  // Get all a Product
  getAllProduct: asyncHandler(async (req, res) => {
    try {
      const product = await Product.find(req.query);
      res.status(httpStatusCode.OK).json({
        message: "Get all product Successfully",
        data: product
      });
    } catch (error) {
      throw new Error(error);
    }
  }),
  // Update a product
  updateProduct: asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
      if (req.body.title) {
        req.body.slug = slugify(req.body.title);
      }
      const updateProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
      res.status(httpStatusCode.OK).json({
        message: "Update product successfully!",
        data: updateProduct
      });
    } catch (error) {
      throw new Error(error);
    }
  }),
  //Delete a product
  deleteProduct: asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
      const deleteProduct = await Product.findByIdAndDelete(id);
      res.status(httpStatusCode.OK).json({
        message: "Delete product successfully!",
        data: deleteProduct
      });
    } catch (error) {
      throw new Error(error);
    }
  })
};

export default productController;
