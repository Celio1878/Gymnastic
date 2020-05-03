module.exports = {
  up: (queryInterface: any, Sequelize: any) => {
    return queryInterface.createTable('students', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      peso: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      altura: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface: any) => {
      return queryInterface.dropTable('students');
  }
};
