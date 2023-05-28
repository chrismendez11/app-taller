const boom = require('@hapi/boom')

const { models } = require('../libs/sequelize')

class PlateTypeService {
  constructor() {}

  async find() {
    const plateTypes = await models.PlateType.findAll()
    return plateTypes
  }

  async findOne(id) {
    const plateType = await models.PlateType.findOne({
      where: id
    })

    if (!plateType) {
      throw boom.notFound('Plate type not found')
    }
    return plateType
  }

  async create(data) {
    const newPlateType = await models.PlateType.create(data)
    return newPlateType
  }

  async delete(id) {
    const plateType = await this.findOne(id)
    await plateType.destroy()
    return { id }
  }

}

module.exports = PlateTypeService
