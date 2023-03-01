const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Menu extends Model {}

Menu.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price : {
          type: DataTypes.DECIMAL,
          allowNull: false,
          validate: {
            isDecimal: true
          }
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'category',
              key: 'id'
            }
          }
        },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'product',
          }
        );
        
        module.exports = Product; 
    }
)