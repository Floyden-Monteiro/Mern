const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductCardSchema = new mongoose.Schema({
  product: {
    type: ObjectId,
    ref: "Product",
  },
  name: String,
  count: Number,
  price: Number,
});

const ProductCart = mongoose.model("ProductCart", ProductCardSchema);

const orderSchema = new mongoose.Schema(
  {
    products: [ProductCardSchema],
    transaction_id: {},
    amount: {
      type: Number,
    },
    status: {
      type: String,
      default: "Recieved",
      enum: ["Cancelled", "Delivered", "Shipped", "Processing", "Recieved"],
    },
    address: String,
    update: Date,
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = { ProductCart, Order };
