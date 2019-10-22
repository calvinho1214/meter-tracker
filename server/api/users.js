const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId/totalScore', async (req, res, next) => {
  try {
    const userId = Number(req.params.userId)
    const totalScore = await User.findOne({
      where: {
        userId
      }
    })
    res.json(totalScore)
  } catch (error) {
    next(error)
  }
})

router.put(`/:userId/totalScore`, async (req, res, next) => {
  try {
    const score = req.body.score
    const userId = Number(req.params.userId)
    const totalScore = await User.findOne({
      where: {
        userId
      }
    })
    const newTotal = totalScore + score
    res.json(newTotal)
  } catch (error) {
    next(error)
  }
})
