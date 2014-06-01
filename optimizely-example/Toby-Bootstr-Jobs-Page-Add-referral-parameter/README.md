optimizely-example/Toby-Bootstr-Jobs-Page-Add-referral-parameter
===============================================================

https://www.optimizely.com/edit?experiment_id=570040687

```json
{
  "name": "[Toby] Bootstr: Jobs Page, Add referral parameter",
  "enabled": true,
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "optimizely\\.(\\D){2,12}/jobs",
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
    "584510368"
  ],
  "variation_weights": {
    "584510368": 10000
  },
  "variation_ids": [
    "584510368"
  ]
}
```