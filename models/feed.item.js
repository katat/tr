module.exports = function(){
  var Sequelize = require('sequelize');
  var sequelize = require('../configs/db');
  return sequelize.define('FeedItem', {
    guid: Sequelize.STRING,
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    categories: Sequelize.STRING,
    url: Sequelize.STRING,
    imageURL: Sequelize.STRING
  })
}