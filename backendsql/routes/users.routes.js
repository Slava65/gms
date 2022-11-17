const userRouter = require("express").Router();

const {
    getCurrentUser,
    updateUser,
  } = require('../controllers/users.controller');
 
  userRouter.get("/me", getCurrentUser);
 
  userRouter.put("/me", updateUser);
   
  module.exports = userRouter;
  