import { librosModel } from './../models/libro.js';
import dotenv from 'dotenv';

dotenv.config();

export default class Libro {

    getLibros = async () => {
        try {
            let libros = await librosModel.find();
            return libros;
        } catch (error) {
            console.log('Error al obtener los usuarios: ', error);
            return null;
        }
    }

    getLibroById = async (id) => {

        try {
            let libro = await librosModel.findOne({ _id: id });
            return libro;
        } catch (error) {
            console.log(error);
            return null;
        }

    }

    saveLibro = async (libro) => {
        try {
            let libroSaved = await librosModel.create(libro);
            return libroSaved;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    updateLibro = async (id, libro) => {
        try {
            let result = await librosModel.updateOne({ _id: id }, { $set: libro });
            return result;
        } catch (error) {
            return null;
        }
    }

    buscarLibro = async (isbn) => {
        try {
            const url = new URL('https://www.googleapis.com/books/v1/volumes');
            url.searchParams.set('q', `isbn:${isbn}`);
            const response = await fetch(url, { method: 'GET' });
            const data = await response.json();


            if (!data.items || data.items.length === 0) {
                return { status: 404, error: 'Libro no encontrado' };
            }

            const bookData = data.items[0].volumeInfo; // Assuming first result is the desired book

            const book = librosModel.create(
                {
                    titulo: bookData.title,
                    autor: bookData.authors ? bookData.authors.join(', ') : 'Unknown',
                    description: bookData.description ? bookData.description : 'Un muy buen libro',
                    tematica: bookData.categories ? bookData.categories[0] : 'Desconocida',
                    img: bookData.imageLinks && bookData.imageLinks.smallThumbnail ? bookData.imageLinks.smallThumbnail : 'Sin imagen',
                    isbn: isbn,
                    isPrestado: "false"
                }
            );

            return book;

        } catch (error) {
            console.error(error);
        }
    }

}