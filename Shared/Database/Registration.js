const Sequelize = require('sequelize')
const sequelize= require('../Db')

const User = sequelize.define('user', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },  mobile: {
    type: Sequelize.STRING,
    allowNull: true
  },  message: {
    type: Sequelize.STRING,
    allowNull: false
  },  Organization:  {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {});

User.sync({force: true}).then(function () {});

module.exports=User;