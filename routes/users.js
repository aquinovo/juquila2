var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET users listing. */
login=function(req, res) {
	console.log(req.body); 
	if(req.body.usuario=="santuario" && req.body.contrasena=="virgenjuquila"){	
		fs.writeFile("./url.txt", req.body.link, function (err) {
		    if (err) {
		    	return console.log(err);
		    }
		    res.send('true');
		});
	}else{
		res.send('false');
	}
	res.send('true');
};
get=function(req, res) {
	res.send('respond wiyh resorce');
};
link=function(req, res) {
	fs.readFile('./url.txt', 'utf-8', (err, data) => {
	  if(err) {
	    console.log('error: ', err);
	    res.send("false");
	  } else {
	    console.log(data);
	    res.send(data);
	  }
	});
};

router.post('/login',login);
router.get('/',get);
router.get('/link',link);
module.exports = router;
