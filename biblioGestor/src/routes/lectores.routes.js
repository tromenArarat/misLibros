import { Router } from 'express';
import { getLectores, saveLector, getLectorById } from "../controllers/lectores.controller.js";


const router = Router();

router.get('/', getLectores);
router.post('/', saveLector);
router.get('/uid', getLectorById);

export default router;
