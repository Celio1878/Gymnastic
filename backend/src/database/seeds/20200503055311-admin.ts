const bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface: any, Sequelize: any) => {
      return queryInterface.bulkInsert('admin', [{
        name: 'Admin',
        email: 'admin@gymnastic.com',
        password_hash: bcrypt.hashSync('123456', 8),
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: () => {}
};