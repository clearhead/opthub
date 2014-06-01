optimizely-example/Kyle-results-hide-sample-size-threshold
=========================================================

https://www.optimizely.com/edit?experiment_id=925539537

```json
{
  "name": "[Kyle] /results - hide sample size threshold",
  "enabled": true,
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com/results?experiment_id",
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
    "925216750"
  ],
  "variation_weights": {
    "925216750": 10000
  },
  "variation_ids": [
    "925216750"
  ]
}
```