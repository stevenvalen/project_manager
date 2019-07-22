require('../models/models');
require('../config/mongoose');

var mongoose = require('mongoose');

var Item = mongoose.model('Item');
module.exports = {
    index: (req, res) => {
        Item.find({}, (err, data) => {
            if (err) {
                res.json({ message: "Error", error: err });
            } else {
                console.log(data);
                res.json({ message: "Success", data: data });
            }
        })
    },
    create: (req, res) => {
        Item.create(req.body, (err, data) => {
            if (err) {
                res.json({ message: "Error", error: err });
            } else {
                res.json({ message: "Success", data: data });
            }
        })
    },
    show: (req, res) => {
        Item.findOne({ _id: req.params.id }, (err, data) => {
            if (err) {
                res.json({ message: "Error", error: err });
            } else {
                console.log(data);
                res.json({ message: "Success", data: data });
            }
        })
    },
    update: (req, res) => {
        Item.update({ _id: req.params.id }, req.body, (err, data) => {
            if (err) {
                res.json({ message: "Error", error: err });
            } else {
                res.json({ message: "Success", data: data });
            }
        })
    },
    destroy: (req, res) => {
        Item.remove({ _id: req.params.id }, (err, data) => {
            if (err) {
                res.json({ message: "Error", error: err });
            } else {
                console.log("DELETED!", data);
                res.json({ message: "Success", data: data });
            }
        })
    }
}