setTimeout(function(){
  
  // Highlight Amsterdam positions
  $('.jobs-list li').has(".job-location:not(:contains('Amsterdam'))").css('opacity', 0.5);
  
}, 3000);