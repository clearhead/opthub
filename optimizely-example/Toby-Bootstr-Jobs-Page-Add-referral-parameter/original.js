function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

setTimeout(function(){
  
  // Attribute refs
  var refname = getQueryVariable("ref");
  var caprefname = refname.charAt(0).toUpperCase() + refname.slice(1);
  
  if( getQueryVariable("ref") ){
    $('.jobs-list li a').attr('href', function() { return this.href.replace('ref=rss&sid=68', 'sid=161') + '&remail=' + refname + '@optimizely.com&detail=Contacted%20by%20' + caprefname + '&rfirst=' + caprefname + '&rlast=' + caprefname; });
  }
  
}, 3000);