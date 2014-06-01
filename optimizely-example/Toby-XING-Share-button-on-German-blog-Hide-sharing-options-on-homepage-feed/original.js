/* <div data-counter="right" data-type="XING/Share" data-lang="de"></div>
<script>
  ;(function (d, s) {
    var x = d.createElement(s),
      s = d.getElementsByTagName(s)[0];
      x.src = "https://www.xing-share.com/js/external/share.js";
      s.parentNode.insertBefore(x, s);
  })(document, "script");
</script> */
$(".lower-post-share .post-side-title, .upper-post-share .post-side-title").after("<div class=\"optimizely_513362309\"><div data-counter=\"right\" data-type=\"XING/Share\" data-lang=\"de\"></div>\n<script>\n  ;(function (d, s) {\n    var x = d.createElement(s),\n      s = d.getElementsByTagName(s)[0];\n      x.src = \"https://www.xing-share.com/js/external/share.js\";\n      s.parentNode.insertBefore(x, s);\n  })(document, \"script\");\n</script></div>");

// Hide Sharing Buttons on Homepage
$(".feed-social-buttons").css({"display":"none", "visibility":""});