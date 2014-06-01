optimizely-example/System-Monitor-API-Results
============================================

https://www.optimizely.com/edit?experiment_id=203142438

```json
{
  "name": "[System] Monitor API Results",
  "enabled": true,
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "http://www.optimizely.com",
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
    "203155272"
  ],
  "variation_weights": {
    "203155272": 10000
  },
  "variation_ids": [
    "203155272"
  ]
}
```