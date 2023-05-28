const boom = require('@hapi/boom')

const { models } = require('../libs/sequelize')

class OrderService {
  constructor() {}

  async find() {
    const orders = await models.Order.findAll()
    return orders
  }

  async findOne(id) {
    const order = await models.Order.findOne({
      where: id,
      include: [{
        association: 'carPlate',
        include: ['plateType']
      }, 'garage']
    })

    if (!order) {
      throw boom.notFound('Order not found')
    }
    return order
  }

  async create(data) {
    const createOrder = await models.Order.create(data)
    const newOrder = this.findOne(createOrder.id)
    return newOrder
  }

  async update(id, changes) {
    const order = await this.findOne(id)
    const update = await order.update(changes)
    const updatedOrder = await this.findOne(update.id)
    return updatedOrder
  }

  async delete(id) {
    const order = await this.findOne(id)
    await order.destroy()
    return { id }
  }

}

module.exports = OrderService
