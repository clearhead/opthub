/* _optimizely_evaluate=force */
window.optimizely = window.optimizely || [];
optimizely.$("#settings-dialog-container div[data-bind*='users']").live("mousedown", function() {
  window.optimizely.push(['trackEvent', 'collaborators_lightbox_engagement']);
});
optimizely.$("#settings-dialog-container div[data-bind*='users'] #send-invite").live("mousedown", function() {
  window.optimizely.push(['trackEvent', 'collaborators_lightbox_send_invite']);
});
/* _optimizely_evaluate=safe */