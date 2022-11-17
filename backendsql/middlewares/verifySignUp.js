const db = require("../models");
const Mem = db.mem;
const User = db.user;
checkEmail = (req, res, next) => {
  
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!",
        });
        return;
      }
      next();
    });
};

const verifySignUp = {
    checkEmail: checkEmail,
};
module.exports = verifySignUp;
