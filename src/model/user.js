('use strict');

const { Model, Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            args: true,
            msg: 'username field cannot be empty',
          },
        },
      },

      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'First name field cannot be empty',
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Lastname field cannot be empty',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            args: true,
            msg: 'please provide your email',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Password field cannot be empty',
          },
          len: {
            args: [8],
            msg: 'password must contain a minimum of 8 characters',
          },
        },
      },

      image: {
        type: DataTypes.BLOB,
      },

      mobile: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'must contain mobile',
          },
          len: {
            args: [9, 11],
            msg:
              'mobile must contain a minimun of 9 and maximum of 11 characters',
          },
        },
      },
    },
    {
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
