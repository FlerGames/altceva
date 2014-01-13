$(document).ready(function () {

    $('.input-group input').focus(
    function(){
        $(this).parent().find('.i-con').css('color','#e96153');
    }).blur(
    function(){
        $(this).parent().find('.i-con').css('color','#818181');
    });

    $('.submit-btn').click(function(){
    	$('.submit-status-message').show();
    });

    $('#goto-register-link').click(function(){
    	$('#login-box').hide();
    	$('#register-box').addClass('animated flipInY').show();
    });
    $('#goto-login-link').click(function(){
    	$('#register-box').hide();
    	$('#login-box').addClass('animated flipInY').show();
    });

    $('#show-register-popup').click(function(){
    	$('#login-popup-window').hide();
    	$('#register-popup-window').show();
    });
    $('#show-login-popup').click(function(){
    	$('#register-popup-window').hide();
    	$('#login-popup-window').show();
    });

    $('#save-form-btn').click(function(){
    	$('.saving-status-msg').show();
    });
    
	$( "#prop-accordion, #item-accordion" ).accordion({
    	heightStyle: "content"
    });

	$('.prop-item .number-selector .input-controls i.fa-plus-square-o').click(function(){
    	var val = parseInt($(this).parent().parent().find('input').val());
    	if(val < 30) $(this).parent().parent().find('input').val(val+1);
    });
    $('.prop-item .number-selector .input-controls i.fa-minus-square-o').click(function(){
    	var val = parseInt($(this).parent().parent().find('input').val());
    	if(val > 0)	$(this).parent().parent().find('input').val(val-1);
    });

    $('.personal-item i.fa-star').click( function(){
    	if($(this).hasClass('selected-star')){
    		$(this).removeClass('selected-star');
    		// change in db to non favorite
    	}else{
    		$(this).addClass('selected-star');
    		// change in db to favorite
    	}
    });

    $('.opt-btn').hover(
	    function() {
	        $(this).addClass('fa-spin');
	    },
	    function() {
	        $(this).removeClass('fa-spin');
	    }
	 );

   
    

    //openPopup("register");

});

function openPopup(window){
	if(window == "register")
		$('.overlay, #register-popup-window').show();
	if(window == "login")
		$('.overlay, #login-popup-window').show();
}

function resizeTexarea(el) {
	el.style.height = "1px";
	el.style.height = el.scrollHeight + "px";
}