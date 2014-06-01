/* _optimizely_evaluate=force */
  var scriptTag = document.createElement('script');  
  scriptTag.setAttribute("type","text/javascript"); 
  var content = '(function(){var e,t,n,r=window,i=document,s=arguments,o="script",u=["config","track","identify","visit","push","call"],a=function(){var e,t=this;for(t._e=[],e=0;u.length>e;e++)(function(e){t[e]=function(){return t._e.push([e].concat(Array.prototype.slice.call(arguments,0))),t}})(u[e])};for(r._w=r._w||{},e=0;s.length>e;e++)r._w[s[e]]=r[s[e]]=r[s[e]]||new a;t=i.createElement(o),t.async=1,t.src="//static.woopra.com/js/w.js",n=i.getElementsByTagName(o)[0],n.parentNode.insertBefore(t,n)})("woopra");woopra.config({domain:"optimizely.com",idle_timeout:18e5});woopra.track()';
  scriptTag.innerHTML = content;
  document.head.appendChild(scriptTag);