const boom = require('@hapi/boom')

const { models } = require('../libs/sequelize')

class CarPlateService {
  constructor() {}

  async find() {
    const carPlates = await models.CarPlate.findAll()
    return carPlates
  }

  async findOne(id) {
    const carPlate = await models.CarPlate.findOne({
      where: id,
      include: ['plateType']
    })

    if (!carPlate) {
      throw boom.notFound('Car plate number not found')
    }
    return carPlate
  }

  async create(data) {
    const newCarPlate = await models.CarPlate.create(data)
    return newCarPlate
  }

  async update(id, changes) {
    const carPlate = await this.findOne(id)
    const update = await carPlate.update(changes)
    return update
  }

  async delete(id) {
    const carPlate = await this.findOne(id)
    await carPlate.destroy()
    return { id }
  }

}

module.exports = CarPlateService
