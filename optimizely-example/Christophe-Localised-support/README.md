optimizely-example/Christophe-Localised-support
==============================================

https://www.optimizely.com/edit?experiment_id=981317591

```json{
  "code": "var match = document.URL.match(\"www\\.optimizely\\.([^\\/]+)\\/\");\nif (typeof match !== undefined) {\n  optimizely.push(['addToSegment', 'domain', match[1]]);\n}",
  "name": "[Christophe] Localised support",
  "conditions": [
    {
      "type": "cookies",
      "values": [
        "test"
      ],
      "names": [
        "OPT_SUPPORT"
      ]
    },
    {
      "not": true,
      "type": "cookies",
      "values": [
        "false"
      ],
      "names": [
        "xxshowLocalizedButterbar"
      ]
    },
    {
      "type": "url",
      "values": [
        {
          "value": "optimizely.se/dashboard",
          "match": "substring"
        },
        {
          "value": "optimizely.dk/dashboard",
          "match": "substring"
        },
        {
          "value": "optimizely.it/dashboard",
          "match": "substring"
        },
        {
          "value": "optimizely.pt/dashboard",
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
    "981307542"
  ],
  "variation_ids": [
    "981307542"
  ],
  "css": ".localized-close2 {\n  float: right;\n  padding-right: 5px;\n  position:relative;\n  top:-7px;\nright:-7px;\n  color: #aaaaaa;\n}\n\n.localized2 {\n  text-align: center;\n  background: #FFFFB7;\n  position: relative;\n  color: black;\n  padding-top:10px;\n  padding-bottom:1px;\n  padding-left:10px;\n  padding-right:10px;\n  float: left;\n  left: 170px;\nmargin-top:5px;\nwidth: 70%\n}\n\n.localized-btn {\nmargin-left:5px;\nmargin-right:5px;\n}"
}
```