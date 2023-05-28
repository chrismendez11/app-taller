const express = require('express')

const PlateTypeService = require('../services/plate_type.service')

const router = express.Router()
const service = new PlateTypeService()

router.get('/', async (req, res, next) => {
  try {
    const plateTypes = await service.find()
    res.status(200).json(plateTypes)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params
    const plateType = await service.findOne(id)
    res.status(200).json(plateType)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const data = req.body
    const newPlateType = await service.create(data)
    res.status(201).json(newPlateType)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params
    await service.delete(id)
    res.status(200).json({ message: `Plate type with id ${id} deleted successfully`})
  } catch (error) {
    next(error)
  }
})

module.exports = router
