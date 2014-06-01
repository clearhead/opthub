optimizely-example/Sean-Optimizely-for-iOS-Typo-Fix
==================================================

https://www.optimizely.com/edit?experiment_id=855331772

```json
{
  "name": "[Sean] Optimizely for iOS Typo Fix",
  "enabled": true,
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com/mobile",
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
    "856441819"
  ],
  "variation_weights": {
    "856441819": 10000
  },
  "variation_ids": [
    "853402554",
    "856441819"
  ]
}
```