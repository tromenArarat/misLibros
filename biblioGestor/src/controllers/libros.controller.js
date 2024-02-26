import Libro from '../service/libroService.js'

const libroService = new Libro();

export const getLibros = async (req, res) => {
    let result = await libroService.getLibros();
    res.send({ status: 'success', result });
}
export const getLibroById = async (req, res) => {
    const { bid } = req.params;
    let libro = await libroService.getLibrosById(bid);
    res.send({ status: 'success', result: libro });
}
export const saveLibro = async (req, res) => {
    const libro = req.body;
    let result = await libroService.saveLibro(libro);
    res.send({ status: 'success', result: result });
}
export async function updateLibro(req, res) {
    // Falta completar
    res.send({ status: 'success', result: 'updateLector' });
}
export const buscarLibro = async (req,res) => {
    const {isbn} = req.params;
    let result = await libroService.buscarLibro(isbn)
    res.send({status: 'hecho',result:result})
}