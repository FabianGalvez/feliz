

module.exports.addComprobante = function(req, res){
  res.render('index', { title: 'Agregar Comprobante'});
};

module.exports.viewComprobante = function(req, res){
  res.render('index', { title: 'Revisar Comprobante'});
};

module.exports.modComprobante = function(req, res){
  res.render('index', { title: 'Modificar Comprobante'});
};
