const kakao = require('./kakaoStrategy');
const usermodel = require('../models/user');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    try{
      const user = usermodel.getKakaoList({kakao_id : id})
      console.log("passport index user :" , user);
      done(null , user)
    }catch(error){
      done(error)
    }
  });
  kakao(passport);
};