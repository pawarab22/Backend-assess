const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
  {

    customername: {
      type: String,
      required: true
    },
    itemname: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    subtotal: {
      type: Number,
      required: false
    },
    total: {
      type: Number,
      required: false
    },
  },
);

const Customer = mongoose.model("customer", schema);
module.exports = Customer;


