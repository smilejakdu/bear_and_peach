var express = require("express");
var router = express.Router();

const db = require("../components/db");
const product_model = require("../models/product")

const formidable = require("formidable");
const path = require("path");
const fs = require("fs");
const util = require("../components/util");


router.post("/", async function (req, res, next) {
  const body = req.body; // {name:asdf,price:200}
  const sub_image = body.sub_image_path;

  delete body.sub_image_path;
  // delete body.detail_info;

  try {
    const connection = await db.beginTransaction();
    const result = await product_model.insert(connection, body);
    console.log("result 27 : " , result);
    await db.commit(connection);
    res.json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

router.put("/", async function (req, res, next) {
  try {
    const json = req.body; // {idx :2, name:'ssdf'}
    const connection = await db.beginTransaction();
    const result = await product_model.update(connection, json);
    await db.commit(connection);
    res.json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

module.exports = router;
