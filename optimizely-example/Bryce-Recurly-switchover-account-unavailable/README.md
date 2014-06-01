optimizely-example/Bryce-Recurly-switchover-account-unavailable
==============================================================

https://www.optimizely.com/edit?experiment_id=311921975

```json{
  "name": "[Bryce] Recurly switchover account unavailable",
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "account",
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
    "311920002"
  ],
  "variation_ids": [
    "311960875",
    "311920002"
  ]
}
```