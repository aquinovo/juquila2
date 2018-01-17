var express = require('express');
var router = express.Router();

/* GET users listing. */
login=function(req, res) {
  res.send('respond with a resource');
};

router.get('/:nombre_usuario',login);
module.exports = router;
