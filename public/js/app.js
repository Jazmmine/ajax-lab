var plantilla = "<div>" + "<p><strong>Centro de Formacion: </strong>__nombre__</p>" + "</div>"
				 + "<p><strong>CEO: </strong>__ceo__</p>" + 
				 "<p><strong>fecha de Creacion: </strong>__fechaCreacion__</p>" + "</div>"

$(document).ready(function(){
    $.ajax({
		url:"http://localhost:3001/demo.json",
		type: "GET",
        data: {"nombre": "jazmine"},
		success: function(response){
			$("#datos").html(plantilla
				.replace("__nombre__", response.centroFormacion)
				.replace("__ceo__", response.ceo)
				.replace("__fechaCreacion__", response.fechaCreacion)
			);
		},
		error: function(error){
			console.log(error);
		}
    });
});                