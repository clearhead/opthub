optimizely-example/Jamie-Add-Woopra
==================================

https://www.optimizely.com/edit?experiment_id=597002941

```json
{
  "code": "/* _optimizely_evaluate=force */\n  var scriptTag = document.createElement('script');  \n  scriptTag.setAttribute(\"type\",\"text/javascript\"); \n  var content = '(function(){var e,t,n,r=window,i=document,s=arguments,o=\"script\",u=[\"config\",\"track\",\"identify\",\"visit\",\"push\",\"call\"],a=function(){var e,t=this;for(t._e=[],e=0;u.length>e;e++)(function(e){t[e]=function(){return t._e.push([e].concat(Array.prototype.slice.call(arguments,0))),t}})(u[e])};for(r._w=r._w||{},e=0;s.length>e;e++)r._w[s[e]]=r[s[e]]=r[s[e]]||new a;t=i.createElement(o),t.async=1,t.src=\"//static.woopra.com/js/w.js\",n=i.getElementsByTagName(o)[0],n.parentNode.insertBefore(t,n)})(\"woopra\");woopra.config({domain:\"optimizely.com\",idle_timeout:18e5});woopra.track()';\n  scriptTag.innerHTML = content;\n  document.head.appendChild(scriptTag);",
  "name": "[Jamie] Add Woopra",
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "optimizely.com",
          "match": "substring"
        }
      ]
    },
    {
      "not": true,
      "type": "url",
      "values": [
        {
          "value": "optimizely.com/edit",
          "match": "substring"
        },
        {
          "value": "optimizely.com/dashboard",
          "match": "substring"
        },
        {
          "value": "optimizely.com/results",
          "match": "substring"
        }
      ]
    },
    {
      "only_first_time": true,
      "type": "visitor",
      "value": "all"
    }
  ],
  "enabled_variation_ids": [
    "595722295"
  ],
  "variation_ids": [
    "595722295"
  ]
}
```