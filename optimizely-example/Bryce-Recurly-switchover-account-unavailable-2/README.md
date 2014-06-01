optimizely-example/Bryce-Recurly-switchover-account-unavailable-2
================================================================

https://www.optimizely.com/edit?experiment_id=789350809

```json
{
  "name": "[Bryce] Recurly switchover account unavailable (2)",
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
    "805711015"
  ],
  "variation_ids": [
    "789192941",
    "805711015"
  ]
}
```