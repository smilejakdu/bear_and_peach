var express = require("express");
var router = express.Router();


const formidable = require("formidable");
const path = require("path");
const fs = require("fs");
const util = require("../components/util");

router.post("/upload", async function (req, res, next) {
  try {
    const query = req.query;
    console.log("req : ", req);
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
      console.log("files : ", files);
      const file = files.image;
      
      if (file) {
        const currentTime = util.getCurrentTime().replace(" ", "");
        const dir = `public/images/kakao/${currentTime}`;
        !fs.existsSync(dir) && fs.mkdirSync(dir);
        const newPath = path.join(__dirname, "..", `${dir}/${file.name}`);
        fs.renameSync(file.path, newPath); //경로를 바꿔줍니다.
        res.json({ result: `images/kakao/${currentTime}/${file.name}` });
      } else {
        res.json({ result: `no image file` });
      }
    });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});


module.exports = router;
