optimizely-example/Geo-targeting-Time-out-B
==========================================

https://www.optimizely.com/edit?experiment_id=138736319

```json{
  "name": "Geo targeting Time out B",
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
    "138682902",
    "138725428"
  ],
  "variation_ids": [
    "138682902",
    "138725428"
  ]
}
```