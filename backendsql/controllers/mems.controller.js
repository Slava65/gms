// const Mem = require("../models/mem.model");
const db = require("../models");
const Mem = db.mem;

const getMems = (req, res) => {
  Mem.findAll({raw:true})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createMem = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const mem = new Mem({
    user_id: req.body.user_id,
    title: req.body.title,
    url: req.body.url,
  });
  Mem.create(mem, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    else res.send(data);
  });
};

const deleteMem = (req, res) => {
  Mem.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Tutorial with id " + req.params.id,
        });
      }
    } else res.send({ message: `Tutorial was deleted successfully!` });
  });
};

module.exports = {
  getMems,
  createMem,
  deleteMem,
};
