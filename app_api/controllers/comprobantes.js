var mongoose = require('mongoose');
var Cmp = mongoose.model('comprobantes');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


module.exports.comprobantesCrear = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success post"});
};

module.exports.comprobantesListar = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success  get"});
};
