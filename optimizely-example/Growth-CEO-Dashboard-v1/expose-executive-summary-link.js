//show the button
$(".executive-summary").css( "display", "block");


//if not already bucketed, send GAE bucketing info
var exp2activateID = 947273371;         //INPUT experimentID of new feature experiment
var myVarNum = 955612571;            //INPUT Variation IDs for experiment to activate

if (document.cookie.match("optimizelyBuckets=([^;]*)")[1].indexOf(exp2activateID) < 0) {
  var myInterval = setInterval(function () {
  var tempID = window.accountId;
    
    if( typeof tempID !== 'undefined') {

		  console.log('accountID='+ window.accountId);
		  var myId = parseInt(window.accountId, 10);
		  var xmlhttp;
		  var url2 = 'https://www.optimizely.com/experiment/record_account_level_bucketing';
 
    	  data = {"variation_id": myVarNum,
        	"account_id": window.accountId,
        	"experiment_id": exp2activateID,
        	};
		var newData = 'data='+ btoa(window.JSON.stringify(data));
		if (window.XMLHttpRequest) {
	    	xmlhttp=new XMLHttpRequest();
		} else {
	    	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("POST", url2, true);
		xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
		xmlhttp.send(newData);
    console.log("POST request sent to bucket_visitors");

		clearInterval(myInterval);
     }
	 else {
		 console.log('account ID not defined='+tempID);
	 }
  }, 100);
};




$("html").delegate(".section .name", "click", function(){ 
  var projID = window.location.href.match(/project_id=(.*\d)/)[1];
  
  if(window.proj_list.indexOf(projID) == -1){
    $(".executive-summary").css( "display", "none");
  }
  else {
    $(".executive-summary").css( "display", "block");
  }
  

});