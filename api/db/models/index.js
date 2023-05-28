const { PlateTypeSchema, PlateType } = require('./plate_type.model')
const { CarPlateSchema, CarPlate } = require('./car_plate.model')
const { GarageSchema, Garage } = require('./garage.model')
const { OrderSchema, Order } = require('./order.model')

function setupModels(sequelize) {
  PlateType.init(PlateTypeSchema, PlateType.config(sequelize))
  CarPlate.init(CarPlateSchema, CarPlate.config(sequelize))
  Garage.init(GarageSchema, Garage.config(sequelize))
  Order.init(OrderSchema, Order.config(sequelize))

  PlateType.associate(sequelize.models)
  CarPlate.associate(sequelize.models)
  Garage.associate(sequelize.models)
  Order.associate(sequelize.models)
}

module.exports = setupModels;
