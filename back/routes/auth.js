const express = require("express");
const router = express.Router();
const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;

passport.use(
  "kakao",
  new KakaoStrategy(
    {
      clientID: "02a7eec164d42a2aa15d0d29f2d4e7b3",
      callbackURL: "/auth/kakao/callback", // 위에서 설정한 Redirect URI
    },
    async (accessToken, refreshToken, profile, done) => {
      //console.log(profile);
      console.log(accessToken);
      console.log("refreshToken : ",refreshToken);
    }
  )
);


router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/",
  }),
  (res, req) => {
    res.redirect("/auth");
  }
);

module.exports = router;
