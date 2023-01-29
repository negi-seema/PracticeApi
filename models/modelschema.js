const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    require: true,
  },
  company: {
    type: String,
  },
  price: {
    type: Number,
    require: [true, "price must be defined"],
  },
  colors: {
    type: [String],
    default: ["#000000", "#ffffff"],
  },
  image: {
    type: String,
    data: Buffer,
  },
  description: String,
  category: {
    type: String,
  },
  feature: {
    type: Boolean,
    default: false,
  },
  shipping: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  stock: {
    type: Number,
    default: 10,
  },
  stars: {
    type: Number,
    default: 5,
  },
  subimage: [
    {
        data: Buffer,
        contentType: String,
      id: String,
      width: {
        type: Number,
        default: 1080,
      },
      height: {
        type: Number,
        default: 650,
      },
      url: {
        type: String,
      },
      filename: String,
      size: Number,
    },
  ],
  reviews: {
    type: Number,
    default: 60,
  },
});

module.exports = mongoose.model("item", itemSchema);
