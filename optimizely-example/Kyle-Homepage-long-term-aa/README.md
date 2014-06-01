optimizely-example/Kyle-Homepage-long-term-aa
============================================

https://www.optimizely.com/edit?experiment_id=642310104

```json{
  "name": "[Kyle] Homepage - long term a/a",
  "enabled": true,
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com/",
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
    "645060025",
    "649010015"
  ],
  "variation_weights": {
    "645060025": 5000,
    "649010015": 5000
  },
  "variation_ids": [
    "645060025",
    "649010015"
  ]
}
```