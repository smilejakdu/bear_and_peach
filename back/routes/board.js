const express = require("express");
const router = express.Router();

const db = require("../components/db")
// const model = require("../models/deliv_info");
const board_model = require("../models/board");

router.get("/" , async function (req, res, next){
  try{

  } catch(error){
    console.log("error : " , error);
  }
});




module.exports = router;
