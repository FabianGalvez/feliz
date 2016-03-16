var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');
var ctrlAccount = require('../controllers/comprobantes');

/* GET home page. */
router.get('/', ctrlMain.index);

/* Comprobantes Contables */
router.get('/comprobante', ctrlAccount.viewComprobante);
router.get('/comprobante/new', ctrlAccount.addComprobante);
router.get('/comprobante/edit', ctrlAccount.modComprobante);

module.exports = router;
