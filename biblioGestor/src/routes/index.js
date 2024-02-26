import { Router } from "express";
import lectoresRoutes from './lectores.routes.js'
import librosRoutes from './libros.routes.js'
import prestamosRoutes from './prestamos.routes.js'

const router = Router();

router.use('/lectores',lectoresRoutes)
router.use('/libros',librosRoutes)
router.use('/prestamos',prestamosRoutes)

export default router;