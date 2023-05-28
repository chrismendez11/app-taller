const boom = require('@hapi/boom')

const { models } = require('../libs/sequelize')

class GarageService {
  constructor() {}

  async find() {
    const garages = await models.Garage.findAll()
    return garages
  }

  async findOne(id) {
    const garage = await models.Garage.findOne({
      where: id
    })

    if (!garage) {
      throw boom.notFound('Garage not found')
    }
    return garage
  }

  async create(data) {
    const newGarage = await models.Garage.create(data)
    return newGarage
  }

  async update(id, changes) {
    const garage = await this.findOne(id)
    const update = await garage.update(changes)
    return update
  }

  async delete(id) {
    const garage = await this.findOne(id)
    await garage.destroy()
    return { id }
  }

}

module.exports = GarageService
