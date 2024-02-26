import Lector from '../service/lectorService.js'

const lectorService = new Lector();

export const getLectores = async (req, res) => {
    let result = await lectorService.getLectores();
    res.send({ status: 'success', result });
}
export const getLectorById = async (req, res) => {
    const { uid } = req.params;
    let lector = await lectorService.getLectorById(uid);
    res.send({ status: 'success', result: lector });
}
export const saveLector = async (req, res) => {
    const lector = req.body;
    let result = await lectorService.saveLector(lector);
    res.send({ status: 'success', result: result });
}
export const updateLector = async (req, res) => {
    // Falta completar
    res.send({ status: 'success', result: 'updateLector' });
}