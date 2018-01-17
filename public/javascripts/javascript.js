
function mostrar(){
  document.getElementById('formulario').style.display = 'block';
}

function datos(){
	var dato=document.getElementById("datos");
	 window.open("homilia.html?usuario="+dato[0].value+"&contrasena="+dato[1].value+"&url="+dato[2].value);
}

$(document).ready(function() {
    var txtFile = "http://localhost:3000/url.txt"
	var file = new File(txtFile);

	file.open("r"); // open file with read access
	var str = "";
	while (!file.eof) {
		// read each line of text
		str += file.readln() + "\n";
	}
	file.close(); 

	console.log(str);

	var usuario=getParameterByName("usuario");
	var contrasena=getParameterByName("contrasena");
	var url=getParameterByName("url");

	if(usuario=="santuario" && contrasena=="juquila"){
		console.log("usuario corecto");
		var link= document.getElementById("referencia");
	link.setAttribute("href",url);
	}


});


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


