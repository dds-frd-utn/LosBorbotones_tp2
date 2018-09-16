$(function(){
	$(document.getElementById('aa')).click(function(){
	$.ajax({
		url:"http://www.mocky.io/v2/5abaf73a350000590073a7b9",
		success:function(data){
			for (var i in data){
				$("ul").append(
					$("<li/>",{text:data[i].nombre+"("+data[i].codigo+")"})
					);
			}
		}
	});
});
});

$(function(id_cliente=1,id_cuenta=1){
	$(document.getElementById('VM')).click(function(){
		$.ajax/{url:"http://localhost:8080/borbotones/rest/cliente/1/cuentas/1",
		success:function(data){
			for (var i in data.movimientos){
				$("ul").append(
					$("<li/>",{text:movimientos[i].creado+"("+data[i].importe+")"})
						);
					}
				}
			}
		});
	});
	// $.ajax({
	// 	url:"http://lsi.no-ip.org:7777/rest/cliente/"+id_cliente+"/cuentas/"+id_cuenta+"/movimientos",
	// 	success:function(data){
	// 		for (var i in data){
	// 			$("ul").append(
	// 				$("<li/>",{text:data[i].nombre+"("+data[i].codigo+")"})
	// 				);
	// 		}
	//	}
	//});

$(function(id_cuenta){
	$(document.getElementById('OS')).click(function(){
	$.ajax({
		url:"http://localhost:8080/borbotones/rest/cliente/1/cuentas/1/saldo",
		success:function(data){
			for (var i in data){
				$("ul").append(
					$("<li/>",{text:data[i].saldo})
					);
			}
		}
	});
});
});

$(function(id_cliente){
	$(document.getElementById('CA')).click(function(){
	$.ajax({
		url:"http://localhost:8080/borbotones/rest/cliente/1/cuentas",
		success:function(data){
			for (var i in data){
				$("p").append(
					$("<p/>",{text:"Apertura date: "+data[i].apertura+"("+data[i].id+")"})
					);
			}
		}
	});
});
});
