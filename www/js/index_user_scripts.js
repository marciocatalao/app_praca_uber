/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
   
     
     $(document).ready(function()
    {
        // Verificar se está conectado à internet (rede)...
        if(navigator.connection && navigator.connection.type=="none"){
            
            // Avisando que não há conexão...
            navigator.notification.alert("Verifique sua conexão à internet e tente novamente.","DESCONECTADO","OK");
            
        }
    }); 
     
     
     
    
     /* button  #btt_exb_loja */
    $(document).on("click", "#btt_exb_loja", function(evt)
    {
         /*global activate_page */
        navigator.notification.beep(1);
         activate_page("#lojas"); 
         return false;
    });
     
     
      $(document).on("click", "#btt_ofer_total", function(evt)
    {
         /*global activate_page */
        navigator.notification.beep(1);
         activate_page("#ofertas"); 
         return false;
    });
     
     /* button  #btt_ofer */
    $(document).on("click", "#btt_ofer", function(evt)
    {
         /*global activate_page */
        navigator.notification.beep(1);
         activate_page("#ofertas"); 
         return false;
    });
     
     
    /* button  #btt_secao */
    $(document).on("click", "#btt_secao", function(evt)
    {
         /*global activate_page */
        navigator.notification.beep(1);
         activate_page("#secoes"); 
         return false;
    });
     
     $(document).on("click", "#sair", function(evt)
    {
        /* your code goes here */
        navigator.notification.beep(1);
        navigator.app.exitApp();
         return false;
    });
     
     
    
        /* button  #home_lojas */
    $(document).on("click", "#home_lojas", function(evt)
    {
         /*global activate_page */
        navigator.notification.beep(1);
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #voltar_lojas */
    $(document).on("click", "#voltar_lojas", function(evt)
    {
         /*global activate_page */
        navigator.notification.beep(1);
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #home_secoes */
    $(document).on("click", "#home_secoes", function(evt)
    {
         /*global activate_page */
        navigator.notification.beep(1);
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #voltar_secoes */
    $(document).on("click", "#voltar_secoes", function(evt)
    {
         /*global activate_page */
        navigator.notification.beep(1);
         activate_page("#lojas"); 
         return false;
    });
    
        /* button  #voltar_ofertas */
    
    
        /* button  #home_ofertas */
    $(document).on("click", "#home_ofertas", function(evt)
    {
         /*global activate_page */
        navigator.notification.beep(1);
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #home_consulta */
    $(document).on("click", "#home_consulta", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #consu_ofer */
    $(document).on("click", "#consu_ofer", function(evt)
    {
         /*global activate_page */
         activate_page("#consulta_pro"); 
         return false;
    });
    
        /* button  #consu_home */
    $(document).on("click", "#consu_home", function(evt)
    {
         /*global activate_page */
         activate_page("#consulta_pro"); 
         return false;
    });
    
        /* button  #busca_secao */
    $(document).on("click", "#busca_secao", function(evt)
    {
         /*global activate_page */
         activate_page("#consulta_pro"); 
         return false;
    });
    
        /* button  #busca_lojas */
    $(document).on("click", "#busca_lojas", function(evt)
    {
         /*global activate_page */
         activate_page("#consulta_pro"); 
         return false;
    });
    
        /* button  #voltar_ofertas */
    $(document).on("click", "#voltar_ofertas", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #btt_home_categoria */
    $(document).on("click", "#btt_home_categoria", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #busca_cat */
    $(document).on("click", "#busca_cat", function(evt)
    {
         /*global activate_page */
         activate_page("#consulta_pro"); 
         return false;
    });
    
        /* button  #voltar_cat */
    $(document).on("click", "#voltar_cat", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #btt_categoria */
    $(document).on("click", "#btt_categoria", function(evt)
    {
         /*global activate_page */
         activate_page("#page_categorias"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
