const { Router } = require("express");
const store = require("../database");

const router = Router();

router.get("/:model", async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  res.status(200).json(response);
});

router.get("/:model/:id", async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  res.status(200).json(response);
});

module.exports = router;

// const { Character } = require("../database");
//     router.get("/character", async (req, res) => {
//       const response = await Character.list();
//       res.status(200).json(response);
//     });
