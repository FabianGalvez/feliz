var mongoose = require( 'mongoose' );

var detalleComprobanteSchema = new mongoose.Schema({
    cuenta_id: String,
    centrocostos_id: String,
    debe: Number,
    haber: Number,
});

var comprobanteSchema = new mongoose.Schema({
    empresa_id: { type: String, required: true},
    tipo: String,
    descripcion: String,
    fecha: Date,
    mayorizado: Number,
    renglones: [detalleComprobanteSchema],
    creadoEn: {type: Date, default: Date.now}
});
