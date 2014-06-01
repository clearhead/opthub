optimizely-example/Steven-and-Adam-Collaborator-Lightbox-on-Dashboard
====================================================================

https://www.optimizely.com/edit?experiment_id=976702261

```json{
  "code": "/* _optimizely_evaluate=force */\nwindow.optimizely = window.optimizely || [];\noptimizely.$(\"#settings-dialog-container div[data-bind*='users']\").live(\"mousedown\", function() {\n  window.optimizely.push(['trackEvent', 'collaborators_lightbox_engagement']);\n});\noptimizely.$(\"#settings-dialog-container div[data-bind*='users'] #send-invite\").live(\"mousedown\", function() {\n  window.optimizely.push(['trackEvent', 'collaborators_lightbox_send_invite']);\n});\n/* _optimizely_evaluate=safe */",
  "audiences": [
    1006641469
  ],
  "name": "[Steven & Adam] Collaborator Lightbox on Dashboard",
  "manual": true,
  "variation_ids": [
    "975972631",
    "984494071",
    "995001055"
  ],
  "urls": [
    {
      "match": "substring",
      "value": "http://www.optimizely.com/dashboard?project_id="
    }
  ],
  "enabled_variation_ids": [
    "975972631",
    "984494071",
    "995001055"
  ]
}
```