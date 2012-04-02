
// remap jQuery to $
(function($){

 





 



    })(this.jQuery);



// usage: log('inside coolFunc',this,arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
    log.history = log.history || [];   // store logs to an array for reference
    log.history.push(arguments);
    if(this.console){
        console.log( Array.prototype.slice.call(arguments) );
    }
};

$(document).ready(function() {
    $('.slideshow').cycle({
        speedIn:  2000,
        speedOut: 2000,
        timeout:   10000,
        fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
    });
    $('.slideshow').css("display", "block");
});
       
$.backstretch("https://s3-eu-west-1.amazonaws.com/grandgardendesigns/background.jpg");

// catch all document.write() calls
(function(doc){
    var write = doc.write;
    doc.write = function(q){ 
        log('document.write(): ',arguments); 
        if (/docwriteregexwhitelist/.test(q)) write.apply(doc,arguments);  
    };
})(document);




//wymeditor
jQuery(function() {
    jQuery('.wymeditor').wymeditor();
});









//date picker on menu page

$(document).ready(function() {
    $( "#datepicker" ).datepicker({
        dateFormat : 'DD, d MM, yy',
        onSelect : function(dateText, inst)
        {
            var epoch = $.datepicker.formatDate('@', $(this).datepicker('getDate')) / 1000;

            $('#alternate').val(epoch);
        }
    });


    $( "#datepicker2" ).datepicker({
        dateFormat : 'DD, d MM, yy',
        onSelect : function(dateText, inst)
        {
            var epoch = $.datepicker.formatDate('@', $(this).datepicker('getDate')) / 1000;

            $('#alternate2').val(epoch);
        }
    });


});



    
    
/*************************************************
    /*    fix footer to bottom and smoke above it
    /***********************************************/

$(function(){
    $(window).resize(function(){
        placeFooter();
        centerCloud();
    });
    placeFooter();
     centerCloud();
    // hide it before it's positioned
    $('#fixedbase').css('display','inline');
});

function placeFooter() {    
    var windHeight = $(window).height();
    var footerHeight = $('#fixedbase').height();
    var offset = parseInt(windHeight) - parseInt(footerHeight);
    var smokeoffset = parseInt(offset) -  parseInt(footerHeight)+20;
    $('#fixedbase').css('top',offset);
     $('#fixedsmoke').css('top',smokeoffset);
}


function centerCloud() {
    var windWidth = $(window).width();
    var cloudWidth = $('#cloudpopup').width();
    var widthoffset = (parseInt(windWidth)/2) - (parseInt(cloudWidth)/2) ;
    $('#cloudpopup').css('left',widthoffset);
    
    
}




 
    
$(document).ready(function() {   
    
    /*************************************************
    /*    blue button hover
    /***********************************************/
    $(".bluebox").hover(
        function() {
        
            $(this).stop().animate({
                backgroundColor:"#51a5fc",
                height: '116px',
                marginBottom: 0,
                marginTop: 0
            },
            150
            );
               
            $(this).find('.clickhere').fadeIn(100);        
        },
        function() {
        
            $(this).stop().animate({
                backgroundColor:"#077eff",
                height: '100px',
                marginBottom: 8,
                marginTop: 8
            
            },
            150
            );
            $(".clickhere").fadeOut(100);
        }
        );
            
               
    /*************************************************
    /*    feature box hover
    /***********************************************/
    $(".feature_box").hover(
        function() {
        
            $(this).stop().animate({
                backgroundColor:"#51a5fc"
              
             
            },
            150
            );
               
            $(this).find('.clickhere').fadeIn(100);        
        },
        function() {
        
            $(this).stop().animate({
                backgroundColor:"#5687b5"
               
               
            
            },
            150
            );
            $(".clickhere").fadeOut(100);
        }
        );
            
  
            
             
  
    
           
    /*****************************************
    /* Scroll to 
     /****************************************/
    $('.feature_box a').on('click', function(evt) {
        $.scrollTo($(this).attr('href'), 800, {
            offset:-40
        });
    
        return false;
   
    });
    
    $('.services_box a').on('click', function(evt) {
        $.scrollTo($(this).attr('href'), 800, {
            offset:-40
        });
      
        return false;
   
  
    });
    $('.service a').on('click', function(evt) {
        $.scrollTo($(this).attr('href'), 800, {
            offset:-40
        });
      
        return false;
   
  
    });
    
   
    
  
    
});
