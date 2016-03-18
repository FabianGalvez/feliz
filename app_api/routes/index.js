var express = require('express');
var router = express.Router();

var ctrlComprobantes = require('../controllers/comprobantes');

// Comprobantes

router.post('/comprobantes', ctrlComprobantes.comprobantesCrear);
router.get('/comprobantes', ctrlComprobantes.comprobantesListar);
//router.get('/comprobantes/:comprobanteid', ctrlLocations.comprobantesLeer);
//router.put('/comprobantes/:comprobanteid', ctrlLocations.comprobantesActualizar);
//router.delete('/comprobantes/:comprobanteid', ctrlLocations.comprobantesBorrar);

module.exports = router;
