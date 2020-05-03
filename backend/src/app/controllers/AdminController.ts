import Sequelize, { Model } from 'sequelize';

export default class Admin extends Model {
	static init(connect: any) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				password_hash: Sequelize.STRING,
			},
			{
				connect
			}
		);
	}
}
