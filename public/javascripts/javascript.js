function mostrar(){
	document.getElementById('formulario').style.display = 'block';
}

window.onload = function(){

	$.ajax({
		url: 'users/link'
	}).then(function(data) {
		console.log(data);
		console.log(window.location);
		url.setAttribute("href",data);
		url.innerHTML="";  
		url.innerHTML="<h3>Click para ver el homilía de la semana<h3>";  
	});

	//url.innerHTML="";

} 

$("#enviar").click(function(){
	var dato=document.getElementById("datos");
	console.log(dato[2].value);
	$.post( "users/login", { usuario: dato[0].value, contrasena: dato[1].value,link: dato[2].value })
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