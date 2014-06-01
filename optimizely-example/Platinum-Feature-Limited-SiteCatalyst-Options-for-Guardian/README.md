optimizely-example/Platinum-Feature-Limited-SiteCatalyst-Options-for-Guardian
============================================================================

https://www.optimizely.com/edit?experiment_id=30330250

```json
{
  "name": "[Platinum Feature] Limited SiteCatalyst Options for Guardian",
  "manual": true,
  "enabled": true,
  "conditions": [
    {
      "type": "code",
      "value": "var accountIds = [\n  1,      // pete's test account\n  4,      // pete's second test account\n  9797755 // Guardian\n];\nvar a = window.accountId;\n(window.accountInfoLoaded &&\n accountIds.indexOf(a) >= 0)"
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
    "30340283"
  ],
  "variation_weights": {
    "30340283": 10000
  },
  "variation_ids": [
    "30340283"
  ]
}
```