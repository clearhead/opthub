optimizely-example/Dan-Multi-axis-Pricing-Page
=============================================

https://www.optimizely.com/edit?experiment_id=596251136

```json{
  "name": "[Dan] Multi-axis Pricing Page",
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "http://www.optimizely.com/pricing",
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
    "589030517",
    "591840335",
    "580140409"
  ],
  "variation_ids": [
    "589030517",
    "591840335",
    "580140409"
  ]
}
```