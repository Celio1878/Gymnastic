module.exports = {
	up: (queryInterface: any, Sequelize: any) => {
		return queryInterface.createTable('admin', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			password_hash: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: (queryInterface: any) => {
		return queryInterface.dropTable('admin');
	},
};
