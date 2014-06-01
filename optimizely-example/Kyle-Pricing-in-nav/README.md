optimizely-example/Kyle-Pricing-in-nav
=====================================

https://www.optimizely.com/edit?experiment_id=830960503

```json
{
  "name": "[Kyle] Pricing in nav",
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com",
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
    "828329225"
  ],
  "variation_ids": [
    "828329225"
  ]
}
```