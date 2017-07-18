//función que me permite imprimir dentro de la sección mensajes

$('#microfono').click(function(ev){
	ev.preventDefault();
	var mensaje = $('#input-msg').val();
	 $('#mensajes').append('<p class="print-mensaje center">'+ mensaje +'</p>');

});
