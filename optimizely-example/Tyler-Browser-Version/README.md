optimizely-example/Tyler-Browser-Version
=======================================

https://www.optimizely.com/edit?experiment_id=570101504

```json{
  "code": "(function() {\n  /*!\n  * Bowser - a browser detector\n  * https://github.com/ded/bowser\n  * MIT License | (c) Dustin Diaz 2013\n  */\n!function(e,t){typeof define==\"function\"?define(t):typeof module!=\"undefined\"&&module.exports?module.exports.browser=t():this[e]=t()}(\"bowser\",function(){function g(){return n?{name:\"Internet Explorer\",msie:t,version:e.match(/(msie |rv:)(\\d+(\\.\\d+)?)/i)[2]}:l?{name:\"Opera\",opera:t,version:e.match(d)?e.match(d)[1]:e.match(/opr\\/(\\d+(\\.\\d+)?)/i)[1]}:r?{name:\"Chrome\",webkit:t,chrome:t,version:e.match(/(?:chrome|crios)\\/(\\d+(\\.\\d+)?)/i)[1]}:i?{name:\"PhantomJS\",webkit:t,phantom:t,version:e.match(/phantomjs\\/(\\d+(\\.\\d+)+)/i)[1]}:a?{name:\"TouchPad\",webkit:t,touchpad:t,version:e.match(/touchpad\\/(\\d+(\\.\\d+)?)/i)[1]}:o||u?(m={name:o?\"iPhone\":\"iPad\",webkit:t,mobile:t,ios:t,iphone:o,ipad:u},d.test(e)&&(m.version=e.match(d)[1]),m):f?{name:\"Android\",webkit:t,android:t,mobile:t,version:(e.match(d)||e.match(v))[1]}:s?{name:\"Safari\",webkit:t,safari:t,version:e.match(d)[1]}:h?(m={name:\"Gecko\",gecko:t,mozilla:t,version:e.match(v)[1]},c&&(m.name=\"Firefox\",m.firefox=t),m):p?{name:\"SeaMonkey\",seamonkey:t,version:e.match(/seamonkey\\/(\\d+(\\.\\d+)?)/i)[1]}:{}}var e=navigator.userAgent,t=!0,n=/(msie|trident)/i.test(e),r=/chrome|crios/i.test(e),i=/phantom/i.test(e),s=/safari/i.test(e)&&!r&&!i,o=/iphone/i.test(e),u=/ipad/i.test(e),a=/touchpad/i.test(e),f=/android/i.test(e),l=/opera/i.test(e)||/opr/i.test(e),c=/firefox/i.test(e),h=/gecko\\//i.test(e),p=/seamonkey\\//i.test(e),d=/version\\/(\\d+(\\.\\d+)?)/i,v=/firefox\\/(\\d+(\\.\\d+)?)/i,m,y=g();return y.msie&&y.version>=8||y.chrome&&y.version>=10||y.firefox&&y.version>=4||y.safari&&y.version>=5||y.opera&&y.version>=10?y.a=t:y.msie&&y.version<8||y.chrome&&y.version<10||y.firefox&&y.version<4||y.safari&&y.version<5||y.opera&&y.version<10?y.c=t:y.x=t,y});\n  \n  window['optimizely'] = window['optimizely'] || [];\n  var version = bowser.version;\n  if (!version && (bowser.name == 'iPad' || bowser.name == 'iPhone')) {\n    var versionMatch = /Version\\/([\\d.]+)/.exec(window.navigator.appVersion);\n    if (versionMatch) { version = versionMatch[1]; }\n  }\n  window['optimizely'].push(['addToSegment', 'browser_version', [bowser.name, version].join(' ')]);\n  window['optimizely'].push(['trackEvent', 'addToSegment']);\n}());",
  "name": "[Tyler] Browser Version",
  "enabled": true,
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "http://www.optimizely.com",
          "match": "simple"
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
    "567670644",
    "572540013"
  ],
  "variation_weights": {
    "567670644": 5000,
    "572540013": 5000
  },
  "variation_ids": [
    "567670644",
    "572540013"
  ]
}
```