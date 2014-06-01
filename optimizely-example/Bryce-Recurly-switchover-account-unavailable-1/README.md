optimizely-example/Bryce-Recurly-switchover-account-unavailable-1
================================================================

https://www.optimizely.com/edit?experiment_id=789877381

```json
{
  "name": "[Bryce] Recurly switchover account unavailable (1)",
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
    "786904318"
  ],
  "variation_ids": [
    "789877382",
    "786904318"
  ]
}
```