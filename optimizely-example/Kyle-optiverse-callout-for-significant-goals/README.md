optimizely-example/Kyle-optiverse-callout-for-significant-goals
==============================================================

https://www.optimizely.com/edit?experiment_id=1131650595

```json{
  "enabled": true,
  "variation_weights": {
    "1126740584": 10000
  },
  "css": ".alert-positive {\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  -ms-border-radius: 3px;\n  -o-border-radius: 3px;\n  border-radius: 3px;\n  text-shadow: 0px 0px 2px white;\n  background-color: #f4ffee;\n  border: 1px solid #c8e4b9;\n  color: #444444;\n  padding: 0.75em;\n}\n\n.new-item {\n  max-height: 0;\n  opacity: 0;\n  transform: translateX(-300px);\n  animation: \n    openSpace 0.2s ease forwards,\n    moveIn 0.3s 0.2s ease forwards;\n  -webkit-animation: \n    openSpace 0.2s ease forwards,\n    moveIn 0.3s 0.2s ease forwards;\n}\n@keyframes openSpace {\n  to { \n    max-height: 66px;\n  }\n}\n@-webkit-keyframes openSpace {\n  to { \n    max-height: 66px;\n  }\n}\n@keyframes moveIn {\n  to { \n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@-webkit-keyframes moveIn {\n  to { \n    opacity: 1;\n    transform: translateX(0);\n  }\n}",
  "name": "[Kyle] optiverse callout for significant goals",
  "variation_ids": [
    "1126010540",
    "1126740584"
  ],
  "urls": [
    {
      "match": "substring",
      "value": "https://www.optimizely.com/results?experiment_id="
    }
  ],
  "enabled_variation_ids": [
    "1126740584"
  ]
}
```