const express = require('express')
const router = express.Router();
const user = require('../models/User')

/* const sushi = [
  { name: 'とろ', price: 300 },
  { name: 'いか', price: 200 },
  { name: 'かっぱ巻き', price: 100 }
] */

router.get("/", async (req, res) => {
  const response = await user()
  res.json(response)
})

module.exports = router;
