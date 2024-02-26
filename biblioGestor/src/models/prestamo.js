import mongoose from 'mongoose';

const collection = 'Prestamos';
const schema = new mongoose.Schema({
    dia: {
        type: Date,
        default: Date.now
    },
    devolucion: {
        type: Date,
        default: () => {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + 15);
            return currentDate;
        }
    },
    lector: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Lectores',
    },
    libro:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Libros',
    }
})

// schema.pre('find',function(){
//     this.populate('libro.Libros')
//     this.populate('lector.Lectores')
// })
// schema.pre('findOne',function(){
//     this.populate('libro.Libros')
//     this.populate('lector.Lectores')
// })

export const prestamosModel = mongoose.model(collection, schema);

