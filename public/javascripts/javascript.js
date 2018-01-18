function mostrar(){
	document.getElementById('formulario').style.display = 'block';
}

window.onload = function(){

	$.ajax({
		url: 'users/homilia'
	}).then(function(data) {
		console.log(data);
		url.setAttribute("href",data);
		url.innerHTML="";  
		url.innerHTML="<h3>Click para ver la homilía de la semana<h3>";  
	});
} 

$("#enviar").click(function(){
	var dato=document.getElementById("datos");
	console.log(dato[2].value);
	$.post( "users/homilia", { usuario: dato[0].value, contrasena: dato[1].value,link: dato[2].value })
	.done(function( data ) {
		console.log( "Data Loaded: " + data );
		window.location="homilia.html";
	});
});

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}