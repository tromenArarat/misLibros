import mongoose from 'mongoose';

const collection = 'Libros';
const schema = new mongoose.Schema({
    isbn: String,
    titulo: String,
    autor: String,
    description: String,
    tematica: String,
    img: String,
    isPrestado: Boolean,
})

export const librosModel = mongoose.model(collection, schema);



