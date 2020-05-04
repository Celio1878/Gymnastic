import Sequelize, { Model } from 'sequelize';

export class Students extends Model {
	static init(connect: any) {
		//@ts-ignore
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
