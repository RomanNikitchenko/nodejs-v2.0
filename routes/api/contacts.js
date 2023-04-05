const express = require("express");
const { v4 } = require('uuid');
const contacts = require("../../models/contacts.json");

const router = express.Router();

//get
router.get("/", async (req, res, next) => {
  res.json({
    status: "success",
    code: 200,
    data: {
      result: contacts
    }
  });
});

//getById
router.get("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  console.log(req.params);
  const result = contacts.find(item => item.id === contactId);
  if (!result) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: `Produst with id=${contactId} not found`
    })
  }
  res.json({
    staus: "success",
    code: 200,
    data: {
      result: result,
    }
  });
});

//post
router.post("/", async (req, res, next) => {
  const newProduct = { ...req.body, id: v4() };
  contacts.push(newProduct)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result: newProduct
    }
  })
});

//delete
router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

//put
router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
