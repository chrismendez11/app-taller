const { Model, DataTypes, Sequelize } = require('sequelize')

const { GARAGE_TABLE } = require('./garage.model')
const { CAR_PLATE_TABLE } = require('./car_plate.model')

const ORDER_TABLE = 'orders'

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  date: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'En fecha de espera'
  },
  carPlateId: {
    field: 'car_plate_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CAR_PLATE_TABLE,
      key: 'id'
    }
  },
  garageId: {
    field: 'garage_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: GARAGE_TABLE,
      key: 'id'
    }
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Order extends Model {
  static associate(models){
    this.belongsTo(models.Garage, { as: 'garage' })
    this.belongsTo(models.CarPlate, { as: 'carPlate' })
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false
    }
  }

}

module.exports = { ORDER_TABLE, OrderSchema, Order }
