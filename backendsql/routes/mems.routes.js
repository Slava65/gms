const memRouter = require("express").Router();

const {
    getMems,
    createMem,
    deleteMem,
  } = require('../controllers/mems.controller');
 
  memRouter.get("/", getMems);
 
  memRouter.post("/", createMem);

  memRouter.delete("/:id", deleteMem)
   
  module.exports = memRouter;
  