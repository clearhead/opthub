optimizely-example/Kyle-Optiverse-sign-in-fix
============================================

https://www.optimizely.com/edit?experiment_id=845191212

```json{
  "name": "[Kyle] Optiverse sign in fix",
  "enabled": true,
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com/signin",
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
    "850481405"
  ],
  "variation_weights": {
    "850481405": 10000
  },
  "variation_ids": [
    "850481405"
  ]
}
```