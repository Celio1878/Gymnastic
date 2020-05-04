import bcrypt from 'bcrypt';
import Sequelize, { Model } from 'sequelize';

export default class Admin extends Model {
	password_hash!: string;
	static init(connect: any) {
		//@ts-ignore
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

	checkPassword(password: string) {
		return bcrypt.compare(password, this.password_hash);
	}
}
