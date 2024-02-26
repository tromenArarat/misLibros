import Prestamo from '../service/prestamoService.js'
import mongoose from 'mongoose'

const prestamoService = new Prestamo();

export const getPrestamos = async (req, res) => {
    let result = await prestamoService.getPrestamos();
    res.send({ status: 'success', result });
}
export const getPrestamoById = async (req, res) => {
    const { pid } = req.params;
    let Prestamo = await prestamoService.getPrestamoById(pid);
    res.send({ status: 'success', result: Prestamo });
}
export const savePrestamo = async (req, res) => {
    const prestamo = req.body;
    let result = await prestamoService.savePrestamo(prestamo);
    res.send({ status: 'success', result: result });
}
export const updatePrestamo = async (req, res) => {
    // Falta completar
    res.send({ status: 'success', result: 'updateLector' });
}