optimizely-example/James-New-Results-Page-OptIn-OptOut
=====================================================

https://www.optimizely.com/edit?experiment_id=854790363

```json{
  "name": "[James] New Results Page OptIn-OptOut",
  "enabled": true,
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com/results",
          "match": "simple"
        },
        {
          "value": "https://www.optimizely.com/results2",
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
    "855180267"
  ],
  "variation_weights": {
    "855180267": 10000
  },
  "variation_ids": [
    "855180267"
  ]
}
```