import * as Yup from 'yup';
import Admin from '../models/Admin';

class AdminController {
	async store(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			email: Yup.string().required(),
			password: Yup.string().min(6).required(),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails' });
		}

		const adminExists = await Admin.findOne({
			where: { email: req.body.email },
		});

		if (adminExists) {
			return res.status(400).json({ error: 'Admin already exists' });
		}

		const { id, name, email } = await Admin.create(req.body);

		return res.json({ id, name, email });
	}

	async update(req, res) {
		const schema = YUP.object().shape({
			name: YUP.string(),
			email: YUP.string().email(),
			oldPassword: YUP.string().min(6),
			password: YUP.string()
				.min(6)
				.when('oldPassword', (oldPassword, field) =>
					oldPassword ? field.required() : field
				),
			confirmPassword: YUP.string().when('password', (password, field) =>
				password ? field.required().oneOf([YUP.ref('password')]) : field
			),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails' });
		}

		const { email, oldPassword } = req.body;

		const admin = await Admin.findByPk(req.adminId);

		if (email !== admin.email) {
			const adminExists = await Admin.findOne({ where: { email } });

			if (adminExists) {
				return res.status(400).json({ error: 'Admin already exists' });
			}
		}

		if (oldPassword && !(await admin.checkPassword(oldPassword))) {
			return res.status(401).json({ error: 'Password does not match' });
		}

		const { id, name } = await admin.update(req.body);

		return res.json({ id, name, email });
	}
}

export default new AdminController();
