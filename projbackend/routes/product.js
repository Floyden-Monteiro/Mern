const express = require("express");
const router = express.Router();

const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  deleteProduct,
  updateProduct,
  getAllProducts,
  getAllUniqueCategroies
} = require("../controllers/product");
const { getUserById } = require("../controllers/user");
const { isAdmin, isSignedIn, isAuthenticated } = require("../controllers/auth");

//all of params
router.param("userId", getUserById);
router.param("productId", getProductById);

//create route
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct,
  
);

//read route
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//delete route
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteProduct
);
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
);

//listing route
router.get("/products", getAllProducts);

router.get("/products/categroies", getAllUniqueCategroies);

module.exports = router;
