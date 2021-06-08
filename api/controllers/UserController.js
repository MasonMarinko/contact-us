var express = require('express')
var router = express.Router()
const { User } = require("../models")
const { pick } = require('lodash')

router.get('/', async function (req, res) {
  const users = await User.find({})
  .exec()
  res.json({users})
})

router.post('/', async function (req, res) {
  // validation here
  const data = {
      quantity: 1,
      ...pick(req.body, ["_id","name", "email", "birthDate", "emailVerify"])
  }

  const user = new User
  user.set(data)
  try {
    await user.save()
  } catch (err) {
    return res.status(400).json({message: err.message})
  }
  res.json({
      user: user.toJSON()
  })
})
// define the about route
router.get('/test', function (req, res) {
  res.send('About Users')
})

module.exports = router