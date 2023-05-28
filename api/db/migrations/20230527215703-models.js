'use strict';

const { PlateTypeSchema, PLATE_TYPE_TABLE } = require('../models/plate_type.model')
const { CarPlateSchema, CAR_PLATE_TABLE } = require('../models/car_plate.model')
const { GarageSchema, GARAGE_TABLE } = require('../models/garage.model')
const { OrderSchema, ORDER_TABLE } = require('../models/order.model')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(PLATE_TYPE_TABLE, PlateTypeSchema)
    await queryInterface.createTable(CAR_PLATE_TABLE, CarPlateSchema)
    await queryInterface.createTable(GARAGE_TABLE, GarageSchema)
    await queryInterface.createTable(ORDER_TABLE, OrderSchema)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(PLATE_TYPE_TABLE)
    await queryInterface.dropTable(CAR_PLATE_TABLE)
    await queryInterface.dropTable(GARAGE_TABLE)
    await queryInterface.dropTable(ORDER_TABLE)
  }
};
