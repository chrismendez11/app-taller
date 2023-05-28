const { Model, DataTypes, Sequelize } = require('sequelize')

const GARAGE_TABLE = 'garages'

const GarageSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Garage extends Model {
  static associate(models){
    this.hasMany(models.Order, {
      as: 'orders',
      foreignKey: 'garageId'
    })
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: GARAGE_TABLE,
      modelName: 'Garage',
      timestamps: false
    }
  }

}

module.exports = { GARAGE_TABLE, GarageSchema, Garage }
