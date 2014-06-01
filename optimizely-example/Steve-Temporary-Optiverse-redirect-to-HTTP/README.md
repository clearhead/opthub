optimizely-example/Steve-Temporary-Optiverse-redirect-to-HTTP
============================================================

https://www.optimizely.com/edit?experiment_id=953550472

```json{
  "name": "[Steve Temporary] Optiverse redirect to HTTP",
  "enabled": true,
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "optimizely.com",
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
    "948560495"
  ],
  "variation_weights": {
    "948560495": 10000
  },
  "variation_ids": [
    "928350924",
    "948560495"
  ]
}
```