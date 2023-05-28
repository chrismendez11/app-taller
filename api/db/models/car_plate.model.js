const { Model, DataTypes, Sequelize } = require('sequelize')

const { PLATE_TYPE_TABLE } = require('./plate_type.model')

const CAR_PLATE_TABLE = 'carPlates'

const CarPlateSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  plateNumber: {
    allowNull: false,
    type: DataTypes.STRING(6),
    unique: true,
    field: 'plate_number'
  },
  plateTypeId: {
    field: 'plate_type_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PLATE_TYPE_TABLE,
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

class CarPlate extends Model {
  static associate(models){
    this.belongsTo(models.PlateType, { as: 'plateType' })
    this.hasMany(models.Order, {
      as: 'orders',
      foreignKey: 'carPlateId'
    })
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: CAR_PLATE_TABLE,
      modelName: 'CarPlate',
      timestamps: false
    }
  }

}

module.exports = { CAR_PLATE_TABLE, CarPlateSchema, CarPlate }
