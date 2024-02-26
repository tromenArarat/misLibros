import { Router } from 'express';
import { getLibros, saveLibro, getLibroById, buscarLibro } from "../controllers/libros.controller.js";

const router = Router();

router.get('/', getLibros);
router.post('/', saveLibro);
router.get('/bid', getLibroById);
router.get('/buscar/:isbn', buscarLibro);

export default router;