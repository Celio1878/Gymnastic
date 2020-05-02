import { Request, Response, Router } from 'express'

export const routes = Router()

routes.get('/', (req: Request, res: Response) => {
	res.json({ message: 'Server is running'})
})