const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const getCurrentUser = (req, res, next) => {
  console.log(req);
  User.findByPk(req.user._id)
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return next(new NotFoundError("Пользователь не найден"));
      }
      return next(err);
    });
};

const signup = (req, res) => {
  const { email } = req.body;
  User.findOne({ email })
    .then((user) => {
      return bcrypt.hash(req.body.pass, 8);
    })
    .then((hash) => {
      const password = hash;
      return User.create({
        user_name: req.body.user_name,
        email: req.body.email,
        pass: password,
      })
        .then((user) => {
          const { user_id, email } = user;
          const userData = { user_id, email };
          return res.send({ data: userData });
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    });
};

const signin = (req, res) => {
  User.findOne({
    where: {
      user_name: req.body.user_name,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compare(req.body.pass, user.pass);
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      var token = jwt.sign({ _id: user.user_id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });
      res.status(200).send({
        token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const updateUser = (req, res, next) => {
  const id = req.user._id;
  const { user_name, email } = req.body;
  User.update({ user_name, email }, { where: { user_id: req.user._id } })
    .then(() => {
      return User.findByPk(id);
    })
    .then((user) => {
      res.send({ user });
    })
    .catch((err) => {
      if (
        err.name === "ValidationError" ||
        err.name === "CastError" ||
        err.name === "ReferenceError"
      ) {
        next(
          new BadRequestError(
            "Переданы некорректные данные в метод обновления пользователя"
          )
        );
      }
      return next(err);
    });
};

module.exports = {
  getCurrentUser,
  signup,
  updateUser,
  signin,
};
