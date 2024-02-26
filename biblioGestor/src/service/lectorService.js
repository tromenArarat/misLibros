
import { lectoresModel } from './../models/lector.js';

export default class Lector {

    getLectores = async () => {
        try {
            let lectores = await lectoresModel.find();
            return lectores;
        } catch (error) {
            console.log('Error al obtener los usuarios: ', error);
            return null;
        }
    }

    getLectorById = async (id) => {

        try {
            let lector = await lectoresModel.findOne({ _id: id });
            return lector;
        } catch (error) {
            console.log(error);
            return null;
        }

    }

    saveLector = async (lector) => {
        try {
            let lectorSaved = await lectoresModel.create(lector);
            return lectorSaved;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    updateLector = async (id, lector) => {
        try {
            let result = await lectoresModel.updateOne({ _id: id }, { $set: lector });
            return result;
        } catch (error) {
            return null;
        }
    }

}