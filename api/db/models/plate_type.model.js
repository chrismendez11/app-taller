const { Model, DataTypes, Sequelize } = require('sequelize')

const PLATE_TYPE_TABLE = 'plateTypes'

const PlateTypeSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  letter: {
    allowNull: false,
    type: DataTypes.STRING(3),
    unique: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class PlateType extends Model {
  static associate(models){
    this.hasMany(models.CarPlate, {
      as: 'carPlates',
      foreignKey: 'plateTypeId'
    })
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: PLATE_TYPE_TABLE,
      modelName: 'PlateType',
      timestamps: false
    }
  }

}

module.exports = { PLATE_TYPE_TABLE, PlateTypeSchema, PlateType }
