
document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal.init("5a90ba81-9118-4c13-a471-a12e9440b95b",
                             
                                 {googleProjectNumber: "239520800134"},
                                 notificationOpenedCallback);
  
  // Show an alert box if a notification comes in when the user is in your app.
  window.plugins.OneSignal.enableInAppAlertNotification(true);
}, false);



function oferta_dia(){ 
 
   $(document).ready(function(){

	
$("#ofer_hoje").load('http://www.mkdistribuicao.com.br/sis_mark/app_cdl_uber/cds_hoje.php');
	
});

 }



function oferta_dia2(){ 
 
   $(document).ready(function(){

	
$("#ofer_hoje2").load('http://www.mkdistribuicao.com.br/sis_mark/app_cdl_uber/cds_hoje.php');
	
});

 }




function acc_lojas(){				
	$(document).ready(function() {		
		$('#conteudo_btt').on("click","#btt_exb_loja",function(execut1){
			execut1.preventDefault();

	    var valores = $(this).attr('data-relmk');
        var caminho = "http://www.mkdistribuicao.com.br/sis_mark/app_cdl_uber/pag_saida.php";
        
		
		
		$.ajax({
			
    url: caminho,
    type: "POST",
    data: {acc:valores},
	cache: false,
    dataType: "html",
    beforeSend: function () {
        //Aqui adicionas o loader
        $("#conteudo").html("<img src='images/lendo_ajax.gif' width='70' height='70'>");
    },         
  	
	success: function(resultado){
      
	  if(resultado){
	   $("#conteudo").html(resultado);
	   
	     }
		 
		 else{
			Error:('ERRO: ' + resultado);
			 
			 }
    }
	
		});

	  });
   });
}


function acc_secao(){

$(document).ready(function() {		
		$('#conteudo').on("click","#btt_secao",function(execut2){
			execut2.preventDefault();

	   
		var valores1 = $(this).attr('name');
		var valores2 = $(this).attr('data-relmk');
        var valores3 = $(this).attr('data-rel2');
        var caminho2 = "http://www.mkdistribuicao.com.br/sis_mark/app_cdl_uber/pag_saida.php";
		
		
		$.ajax({
			
    url: caminho2,
    type: "POST",
    data: {cod_loja: valores2, btt_abre_secao:valores1, cod_secao: valores3},
	cache: false,
    dataType: "html",
    beforeSend: function () {
        //Aqui adicionas o loader
        $("#conteudo2").html("<img src='images/lendo_ajax.gif' width='70' height='70'>");
    },         
	
	success: function(resultado2){
      
	  if(resultado2){
	   $("#conteudo2").html(resultado2);
	   
	     }
		 
		else {
			alert('erros');
				}
    }
		});
	  });
   });
}


function acc_ofertas(){

$(document).ready(function() {		
		$('#conteudo2').on("click","#btt_ofer",function(execut3){
			execut3.preventDefault();

	    var valores = $(this).attr('data-relmk');
		var valores1 = $(this).attr('data-rel1');		
        var valores2 = $(this).attr('data-rel2');
		var valores3 = $(this).attr('data-rel3');
		var valores4 = $(this).attr('name');
        var caminho2 = "http://www.mkdistribuicao.com.br/sis_mark/app_cdl_uber/pag_saida.php";
		
		
		$.ajax({
			
    url: caminho2,
    type: "POST",
    data: {cod_secao:valores, cod_loja:valores3, nome_loja:valores2, nome_secao:valores1, abre_ofer_secao:valores4},
	cache: false,
    dataType: "html",
    beforeSend: function () {
        //Aqui adicionas o loader
        $("#conteudo3").html("<img src='images/lendo_ajax.gif' width='70' height='70'>");
    },         
	
	success: function(resultado3){
      
	  if(resultado3){
	   $("#conteudo3").html(resultado3);
	   
	     }
		 
		else {
			alert('erros');
				}
    }
		});
	  });
   });
}


function acc_ofertas_total(){

$(document).ready(function() {		
		$('#conteudo2').on("click","#btt_ofer_total",function(execut4){
			execut4.preventDefault();

	    var valores4 = $(this).attr('name');
		var valores3 = $(this).attr('data-rel3');	
		var caminho2 = "http://www.mkdistribuicao.com.br/sis_mark/app_cdl_uber/pag_saida.php";
		
		
		$.ajax({
			
    url: caminho2,
    type: "POST",
    data: {cod_loja:valores3, total_ofer_loja:valores4},
	cache: false,
    dataType: "html",
	beforeSend: function () {
        //Aqui adicionas o loader
        $("#conteudo3").html("<img src='images/lendo_ajax.gif' width='70' height='70'>");
    },         
            
	success: function(resultado3){
      
	  if(resultado3){
	   $("#conteudo3").html(resultado3);
	   
	     }
		 
		else {
			alert('erros');
				}
    }
		});
	  });
   });
}



function acc_ofertas_busca(){

$(document).ready(function() {		
		$('#conteudo_busca_m').on("click","#btt_ofer_total",function(execut4){
			execut4.preventDefault();

	    var valores4 = $(this).attr('name');
		var valores3 = $(this).attr('data-rel3');	
		var caminho2 = "http://www.mkdistribuicao.com.br/sis_mark/app_cdl_uber/pag_saida.php";
		
		
		$.ajax({
			
    url: caminho2,
    type: "POST",
    data: {cod_loja:valores3, total_ofer_loja:valores4},
	cache: false,
    dataType: "html",
	beforeSend: function () {
        //Aqui adicionas o loader
        $("#conteudo3").html("<img src='images/lendo_ajax.gif' width='70' height='70'>");
    },         
            
	success: function(resultado3){
      
	  if(resultado3){
	   $("#conteudo3").html(resultado3);
	   
	     }
		 
		else {
			alert('erros');
				}
    }
		});
	  });
   });
}


function acc_ofertas_page(){

$(document).ready(function() {		
		$('#conteudo_busca').on("click","#btt_ofer_total",function(execut4){
			execut4.preventDefault();

	    var valores4 = $(this).attr('name');
		var valores3 = $(this).attr('data-rel3');	
		var caminho2 = "http://www.mkdistribuicao.com.br/sis_mark/app_cdl_uber/pag_saida.php";
		
		
		$.ajax({
			
    url: caminho2,
    type: "POST",
    data: {cod_loja:valores3, total_ofer_loja:valores4},
	cache: false,
    dataType: "html",
	beforeSend: function () {
        //Aqui adicionas o loader
        $("#conteudo3").html("<img src='images/lendo_ajax.gif' width='70' height='70'>");
    },         
            
	success: function(resultado3){
      
	  if(resultado3){
	   $("#conteudo3").html(resultado3);
	   
	     }
		 
		else {
			alert('erros');
				}
    }
		});
	  });
   });
}



function acc_busca(){				
	$(document).ready(function() {		
		$('#busca_pro').on("click",function(execut1){
			execut1.preventDefault();

	    var valores = $(this).attr('data-relmk');
		var valores2 = $("#palavra").val();
        var caminho = "http://www.mkdistribuicao.com.br/sis_mark/app_cdl_uber/busca2.php";
        
		
		
		$.ajax({
			
    url: caminho,
    type: "POST",
    data: {busca_pro:valores, palavra:valores2},
	cache: false,
    dataType: "html",
    beforeSend: function () {
        //Aqui adicionas o loader
        $("#conteudo_busca").html("<img src='images/lendo_ajax.gif' width='70' height='70'>");
    },         
  	
	success: function(resultado){
      
	  if(resultado){
	   $("#conteudo_busca").html(resultado);
	   
          $("#palavra").val('');
	     }
		 
		 else{
			Error:('ERRO: ' + resultado);
			 
			 }
    }
	
		});

	  });
   });
}


function acc_busca_m(){				
	$(document).ready(function() {		
		$('#foot_btt_m').on("click","#busca_pro_m",function(execut1){
			execut1.preventDefault();

	    var valores = $(this).attr('data-relmk');
		var valores2 = $("#palavra_m").val();
        var caminho = "http://www.mkdistribuicao.com.br/sis_mark/app_cdl_uber/busca2.php";
        
		
		
		$.ajax({
			
    url: caminho,
    type: "POST",
    data: {busca_pro_m:valores, palavra_m:valores2},
	cache: false,
    dataType: "html",
    beforeSend: function () {
        //Aqui adicionas o loader
        $("#conteudo_busca_m").html("<img src='images/lendo_ajax.gif' width='70' height='70'>");
    },         
  	
	success: function(resultado){
      
	  if(resultado){
	   $("#conteudo_busca_m").html(resultado);
	   
          $("#palavra_m").val('');
          
	     }
		 
		 else{
			Error:('ERRO: ' + resultado);
			 
			 }
    }
	
		});

	  });
   });
}


function acc_categoria(){				
	$(document).ready(function() {		
		$('#conteudo_btt').on("click","#btt_categoria",function(execut1){
			execut1.preventDefault();

            $('#conteudo_ofer_cat').empty()
            
	    var valores = $(this).attr('data-relmk1');
        var caminho = "http://www.mkdistribuicao.com.br/sis_mark/app_cdl_uber/pag_saida.php";
        
		
		
		$.ajax({
			
    url: caminho,
    type: "POST",
    data: {btt_categoria:valores},
	cache: false,
    dataType: "html",
    beforeSend: function () {
        //Aqui adicionas o loader
        $("#conteudo_categoria").html("<img src='images/lendo_ajax.gif' width='70' height='70'>");
    },         
  	
	success: function(resultado){
      
	  if(resultado){
	   $("#conteudo_categoria").html(resultado);
	   
	     }
		 
		 else{
			Error:('ERRO: ' + resultado);
			 
			 }
    }
	
		});

	  });
   });
}



function acc_ofertas_cat(){

$(document).ready(function() {		
		$('#conteudo_coluna').on("click","#btt_ofer_cat",function(execut3){
			execut3.preventDefault();

	    var valores = $(this).attr('data-relmk');
		var valores1 = $(this).attr('data-rel1');		
       	var valores4 = $(this).attr('name');
        var caminho2 = "http://www.mkdistribuicao.com.br/sis_mark/app_cdl_uber/pag_saida.php";
		
		
		$.ajax({
			
    url: caminho2,
    type: "POST",
    data: {cod_secao:valores, nome_secao:valores1, btt_ofer_cat:valores4},
	cache: false,
    dataType: "html",
    beforeSend: function () {
        //Aqui adicionas o loader
        $("#conteudo_ofer_cat").html("<img src='images/lendo_ajax.gif' width='70' height='70'>");
    },         
	
	success: function(resultado3){
      
	  if(resultado3){
	   $("#conteudo_ofer_cat").html(resultado3);
	   
	     }
		 
		else {
			alert('erros');
				}
    }
		});
	  });
   });
}


function acc_ofertas_cat_lojas(){

$(document).ready(function() {		
		$('#conteudo_ofer_cat').on("click","#btt_ofer_total",function(execut4){
			execut4.preventDefault();

	    var valores4 = $(this).attr('name');
		var valores3 = $(this).attr('data-rel3');	
		var caminho2 = "http://www.mkdistribuicao.com.br/sis_mark/app_cdl_uber/pag_saida.php";
		
		
		$.ajax({
			
    url: caminho2,
    type: "POST",
    data: {cod_loja:valores3, total_ofer_loja:valores4},
	cache: false,
    dataType: "html",
	beforeSend: function () {
        //Aqui adicionas o loader
        $("#conteudo3").html("<img src='images/lendo_ajax.gif' width='70' height='70'>");
    },         
            
	success: function(resultado3){
      
	  if(resultado3){
	   $("#conteudo3").html(resultado3);
	   
	     }
		 
		else {
			alert('erros');
				}
    }
		});
	  });
   });
}



//console.log(tempo_index());
console.log(acc_ofertas_cat_lojas());
console.log(acc_ofertas_cat());
console.log(acc_categoria());
console.log(acc_ofertas_page());
console.log(acc_ofertas_busca());
console.log(acc_busca_m());
console.log(acc_busca());
console.log(oferta_dia2());
console.log(oferta_dia());
console.log(acc_lojas());
console.log(acc_secao());
console.log(acc_ofertas());
console.log(acc_ofertas_total());