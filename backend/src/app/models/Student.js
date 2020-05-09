import Sequelize, { Model } from 'sequelize';

export class Students extends Model {
	static init() {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				idade: Sequelize.INTEGER,
				peso: Sequelize.INTEGER,
				altura: Sequelize.INTEGER,
			},
			{ connect }
		);
		return this
	}
}
