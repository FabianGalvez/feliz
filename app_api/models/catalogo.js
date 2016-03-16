var mongoose = require( 'mongoose' );

var catalogoTipoSchema = new mongoose.Schema({
  descripcion: String
});

var grupoContableSchema = new mongoose.Schema({
    codigo: String
    descripcion: String,
});

var catalogoSchema = new mongoose.Schema({
    catalogTipo_id: String,
    codigo: String,
    descripcion: String,
    naturaleza: {Type: Number},
    padre: Number
    grupoContable_id: string;
});
