var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET users listing. */
get=function(req, res) {
	res.send('respond wiyh resorce');
};
homilia1=function(req, res) {
	console.log(req.body); 
	if(req.body.usuario=="santuario" && req.body.contrasena=="virgenjuquila"){	
		fs.writeFile("./homilia.txt", req.body.link, function (err) {
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
homilia2=function(req, res) {
	fs.readFile('./homilia.txt', 'utf-8', (err, data) => {
	  if(err) {
	    console.log('error: ', err);
	    res.send("false");
	  } else {
	    console.log(data);
	    res.send(data);
	  }
	});
};
arquidiocesis1=function(req, res) {
	console.log(req.body); 
	if(req.body.usuario=="santuario" && req.body.contrasena=="virgenjuquila"){	
		fs.writeFile("./arquidiocesis.txt", req.body.link, function (err) {
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
arquidiocesis2=function(req, res) {
	fs.readFile('./arquidiocesis.txt', 'utf-8', (err, data) => {
	  if(err) {
	    console.log('error: ', err);
	    res.send("false");
	  } else {
	    console.log(data);
	    res.send(data);
	  }
	});
};
router.get('/',get);
router.post('/homilia',homilia1);
router.get('/homilia',homilia2);
router.post('/arquidiocesis',arquidiocesis1);
router.get('/arquidiocesis',arquidiocesis2);
module.exports = router;
