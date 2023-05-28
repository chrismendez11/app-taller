const express = require('express')

const CarPlateService = require('../services/car_plate.service')

const router = express.Router()
const service = new CarPlateService()

router.get('/', async (req, res, next) => {
  try {
    const carPlates = await service.find()
    res.status(200).json(carPlates)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params
    const carPlate = await service.findOne(id)
    res.status(200).json(carPlate)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const data = req.body
    const newCarPlate = await service.create(data)
    res.status(201).json(newCarPlate)
  } catch (error) {
    next(error)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const id = req.params
    const changes = req.body
    const update = await service.update(id, changes)
    res.status(200).json({ message: `Car plate number with id ${id} updated successfully`, carPlate: update})
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params
    await service.delete(id)
    res.status(200).json({ message: `Car plate number with id ${id} deleted successfully`})
  } catch (error) {
    next(error)
  }
})

module.exports = router
