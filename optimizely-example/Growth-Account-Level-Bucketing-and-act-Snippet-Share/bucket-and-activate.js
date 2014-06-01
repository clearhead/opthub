var exp2activateID = 696941682;         //INPUT experimentID of new feature experiment
var numOfvariations= 2;                 //INPUT number of variations of new feature experiment (starts at 1 for original)
var varIdList = [707221451, 699224044]; //INPUT Variation IDs for experiment to activate

var myInterval = setInterval(function () {
var tempID = window.accountId;

if( typeof tempID !== 'undefined') {

	  console.log('accountID='+ window.accountId);
	  var myId = parseInt(window.accountId, 10);
	  var num2mod = myId + exp2activateID;
	  var var2bucket = num2mod % numOfvariations;
	  var myVarNum = varIdList[var2bucket];
	  var xmlhttp;
	  var url2 = 'https://www.optimizely.com/experiment/record_account_level_bucketing';


	  window['optimizely'] = window['optimizely'] || [];
	  window['optimizely'].push(["bucketVisitor", exp2activateID, myVarNum]);

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

	window['optimizely'].push(["activate", exp2activateID]);
	console.log("POST request sent to bucket_visitors");

	clearInterval(myInterval);
 }
 else {
	 console.log('account ID not defined='+tempID);
 }
}, 100);