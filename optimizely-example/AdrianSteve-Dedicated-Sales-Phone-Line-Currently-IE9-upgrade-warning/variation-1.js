$("#container.edit").css({ 'margin-bottom': '50px' });
$("#container.edit").after("<div class='IEwarning' style='position: absolute; bottom: 0; width:100%;padding: 15px;background-color: #fefaac; color: #b3000d; /* display: none; */ font-size: 15px; font-weight: bold; text-align: center;'><span>The Optimizely editor will no longer support Internet Explorer 9 after August 5. Please <a href='http://microsoft.com/ie/download'>upgrade</a> or try <a href='http://browsehappy.com/'>another browser</a>; we recommend using the latest versions of Chrome or Firefox.</span></div>");
     
if ($(document).height() < 600) {
     $('.SalesPop').css("display", "none");
     $("#container.edit").css({ 'margin-bottom': '0px' });} 
                      





window.onresize = function() {
     if ($(document).height() < 600) {
           // $('.SalesPop').css("display", "none");
           $("#container.edit").css({ 'margin-bottom': '0px' });
    }  
   else { 
    // $('.SalesPop').css("display", "block");
    $("#container.edit").css({ 'margin-bottom': '50px' });
}

}