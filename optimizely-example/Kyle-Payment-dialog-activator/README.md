optimizely-example/Kyle-Payment-dialog-activator
===============================================

https://www.optimizely.com/edit?experiment_id=669720319

```json{
  "code": "/* _optimizely_evaluate=force */\nwindow.KRUSH = window.KRUSH || {};\nKRUSH.pricingDialogueExperimentId = 688370115;\n/* _optimizely_evaluate=safe */",
  "name": "[Kyle] Payment dialog - activator",
  "enabled": true,
  "conditions": [
    {
      "not": true,
      "type": "cookies",
      "values": [
        ""
      ],
      "names": [
        "experiment_qa"
      ]
    },
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com/pricing",
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
    "670630259"
  ],
  "variation_weights": {
    "670630259": 10000
  },
  "variation_ids": [
    "670630259"
  ]
}
```