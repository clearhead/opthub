optimizely-example/Platinum-Feature-Additional-MVT-Combinations
==============================================================

https://www.optimizely.com/edit?experiment_id=136958754

```json
{
  "name": "[Platinum Feature] Additional MVT Combinations",
  "manual": true,
  "enabled": true,
  "conditions": [
    {
      "type": "code",
      "value": "var accountIds = [\n  24,       // mike's test account\n  111395441 // livecareer\n];\nvar a = window.accountId;\n(window.accountInfoLoaded &&\n accountIds.indexOf(a) >= 0)"
    },
    {
      "type": "url",
      "values": [
        {
          "value": ".*",
          "match": "regex"
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
    "137010229"
  ],
  "variation_weights": {
    "137010229": 10000
  },
  "variation_ids": [
    "137010229"
  ]
}
```