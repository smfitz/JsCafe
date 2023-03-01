const Menu = require('./Menu');
const Merch = require('./Merch');


User.hasMany(Review, {
    foreignKey: 'user_id',
  });
  
  
  module.exports = {
    User,
    Menu,
    Merch,
  };