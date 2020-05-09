import bcrypt from 'bcrypt';
import Sequelize, { Model } from 'sequelize';

export default class Admin extends Model {
	static init(connect) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				password_hash: Sequelize.STRING,
			},
			{ connect }
		);
		return this;
	}

	checkPassword(password) {
		return bcrypt.compare(password, this.password_hash);
	}
}
