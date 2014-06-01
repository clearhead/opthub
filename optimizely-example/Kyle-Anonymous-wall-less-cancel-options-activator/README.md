optimizely-example/Kyle-Anonymous-wall-less-cancel-options-activator
===================================================================

https://www.optimizely.com/edit?experiment_id=595033769

```json
{
  "code": "/* _optimizely_evaluate=force */\nwindow.KRUSH = window.KRUSH || {};\nKRUSH.anonymousWallExperimentId = 593751629;\n/* _optimizely_evaluate=safe */",
  "name": "[Kyle] Anonymous wall - less cancel options - activator",
  "enabled": true,
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com/edit",
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
    "596261548"
  ],
  "variation_weights": {
    "596261548": 10000
  },
  "variation_ids": [
    "596261548",
    "593681478"
  ]
}
```