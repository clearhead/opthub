var match = document.URL.match("www\.optimizely\.([^\/]+)\/");
if (typeof match !== undefined) {
  optimizely.push(['addToSegment', 'domain', match[1]]);
}