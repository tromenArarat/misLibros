import mongoose from 'mongoose';

const collection = 'Lectores';
const schema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  alta: {
    type: Date,
    default: Date.now
  },
  prestamo: [{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'Prestamos',
    default: []
  }]
})

schema.pre('find',function(){
    this.populate('prestamo.prestamos')
})
schema.pre('findOne',function(){
    this.populate('prestamo.prestamos')
})

export const lectoresModel = mongoose.model(collection, schema);



