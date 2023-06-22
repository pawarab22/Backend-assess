const express = require("express");
const Customer = require("../models/Customer");
const app = express();

app.post("/", async (req, res) => {
    try {
        let body = req.body;
        let customer = new Customer(
            {
                customername: body.customername,
                itemname: body.itemname,
                quantity: body.quantity,
                price: body.price,
                subtotal: body.quantity * body.price,
                total: body.quantity * body.price + body.subtotal
            }
        );
        customer.save().then(result => {
            res.send(JSON.stringify({ status: "success", data: result }));
        })
    }
    catch (err) {
        res.send(({ status: "failed", data: err.message }));
    }
});


app.get("/", (req, res) => {
    try {
        Customer.find().then((result) => {
            res.send({ status: "success", data: result });
        })
    }
    catch (err) {
        res.send({ status: "failed", data: err });
    }
});


app.get("/:id", (req, res) => {
    try {
        Customer.findById(req.params.id).then((result) => {
            res.send({ status: "success", data: result });
        })
    }
    catch (err) {
        res.send({ status: "failed", data: err });
    }
});


app.put("/:id", (req, res) => {
    try {
        let body = req.body;
        Customer.findByIdAndUpdate(req.params.id, body).then((result) => {
            res.send(JSON.stringify({ status: "success", data: result }));
        })
    }
    catch (err) {
        res.send({ status: "failed", data: err });
    }
});


app.delete("/:id", (req, res) => {
    try {
        Customer.findByIdAndDelete(req.params.id).then((result) => {
            res.send(JSON.stringify({ status: "success", data: result }));
        })
    }
    catch (err) {
        res.send({ status: "failed", data: err });
    }
})

module.exports = app;