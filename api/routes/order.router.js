const express = require('express')

const OrderService = require('../services/order.service')

const router = express.Router()
const service = new OrderService()

router.get('/', async (req, res, next) => {
  try {
    const orders = await service.find()
    res.status(200).json(orders)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params
    const order = await service.findOne(id)
    res.status(200).json(order)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const data = req.body
    const newOrder = await service.create(data)
    res.status(201).json(newOrder)
  } catch (error) {
    next(error)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const id = req.params
    const changes = req.body
    const update = await service.update(id, changes)
    res.status(200).json({ message: `Order with id ${id} updated successfully`, order: update})
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params
    await service.delete(id)
    res.status(200).json({ message: `Order with id ${id} deleted successfully`})
  } catch (error) {
    next(error)
  }
})

module.exports = router
