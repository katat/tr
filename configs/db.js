var Sequelize = require('sequelize');
function Db(){
  return new Sequelize('database', 'username', 'password', {
      // sqlite! now!                                                                                                                                                                
      dialect: 'sqlite',

      // the storage engine for sqlite                                                                                                                                                                
      // - default ':memory:'                                                                                                                                                                
      // storage: __dirname + '/database.sqlite'
  });
}

module.exports = new Db();