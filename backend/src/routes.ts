import { Request, Response, Router } from 'express';
import { Students } from './app/models/Student';

//@ts-ignore
export const routes = new Router();

routes.get('/', async (req: Request, res: Response) => {
	const student = await Students.create({
		name: 'Celio',
		email: 'celio@hotmail.com',
		idade: 26,
		peso: 75,
		altura: 178,
	});
	res.json(student);
});
