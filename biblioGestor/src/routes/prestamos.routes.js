import { Router } from 'express';
import { getPrestamos, savePrestamo, getPrestamoById } from "../controllers/prestamos.controller.js";


const router = Router();

router.get('/', getPrestamos);
router.post('/', savePrestamo);
router.get('/:pid', getPrestamoById);

export default router;