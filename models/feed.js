module.exports = function(){
  var Sequelize = require('sequelize');
  var sequelize = require('../configs/db');
  return sequelize.define('Feed', {
    name: Sequelize.STRING,
    rss: Sequelize.STRING,
    tweetHandle: Sequelize.STRING
  })
}