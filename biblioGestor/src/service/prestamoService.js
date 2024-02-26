import { prestamosModel } from './../models/prestamo.js';
import { librosModel } from './../models/libro.js';
import { lectoresModel } from './../models/lector.js';
import Libro from './libroService.js';

export default class Prestamo {

    getPrestamos = async () => {
        try {
            let prestamos = await prestamosModel.find().populate('libro').populate('lector');
            return prestamos;
        } catch (error) {
            console.log('Error al obtener los usuarios: ', error);
            return null;
        }
    }

    getPrestamoById = async (id) => {
        try {
            let prestamo = await prestamosModel.findOne({ _id: id });
            return prestamo;
        } catch (error) {
            console.log(error);
            return null;
        }

    }

    savePrestamo = async (prestamo) => {
        try {
            let id = prestamo.libro;
            let libroService = new Libro();
            let libro = await libroService.getLibroById(id);            
            libro.isPrestado = true;
            await libroService.saveLibro(libro)
            let prestado = prestamo;
            let prestamoSaved = await prestamosModel.create(prestado);
            return prestamoSaved;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    updatePrestamo = async (id, prestamo) => {
        try {
            let result = await prestamosModel.updateOne({ _id: id }, { $set: prestamo });
            return result;
        } catch (error) {
            return null;
        }
    }

}