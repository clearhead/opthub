optimizely-example/Kyle-Opticon-promo
====================================

https://www.optimizely.com/edit?experiment_id=859201113

```json{
  "name": "[Kyle] Opticon promo",
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "http://www.optimizely.com",
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
    "852651845",
    "866018552"
  ],
  "variation_ids": [
    "852651845",
    "866018552"
  ]
}
```