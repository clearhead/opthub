optimizely-example/Kyle-Pricing-page-no-free-trial-language
==========================================================

https://www.optimizely.com/edit?experiment_id=562510027

```json{
  "name": "[Kyle] Pricing page - no free trial language",
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com/pricing",
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
    "540525504",
    "561740390"
  ],
  "variation_ids": [
    "540525504",
    "561740390"
  ]
}
```