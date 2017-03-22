$(document).on('deviceready', function() {

     // determinem amplada alçada DISPOSITIU ------------------
     var amplada_pantalla = screen.width ;		// 1440px  --> SG_S6
     var alcada_pantalla = screen.height ; 		// 2560px
     var amplada_pantalla_CSS = window.innerWidth ; 	// 720px
     var alcada_pantalla_CSS = window.innerHeight ;	// 1250px 
     /////////////////////////////////////////////////////////
     
      alert("ampLada : " + amplada_pantalla + "alçada : "+alcada_pantalla + " amplada css : " +amplada_pantalla_CSS + " ALÇADA css : " + alcada_pantalla_CSS) ;	
     
	document.addEventListener("offline", function() { 
		alert("ara NO HI HA internet");
	}, false);
 
	$(window).resize(function() {
		alert("has girat el dispositiu");
	}, false); 
	
	document.addEventListener('touchstart', function(e) {
		//alert("Clicat") ;
	});	
	
	document.addEventListener('touchmove', function(e) {
		alert("has arrastrat el dit");
	 });
	    
      
});


