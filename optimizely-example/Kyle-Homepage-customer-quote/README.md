optimizely-example/Kyle-Homepage-customer-quote
==============================================

https://www.optimizely.com/edit?experiment_id=670582446

```json{
  "name": "[Kyle] Homepage - customer quote",
  "conditions": [
    {
      "not": true,
      "type": "browser",
      "values": [
        "mobile"
      ]
    },
    {
      "not": true,
      "type": "cookies",
      "values": [
        "",
        "1"
      ],
      "names": [
        "experiment_qa",
        "optimizely_signed_in"
      ]
    },
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com",
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
    "678282134",
    "681521788"
  ],
  "variation_ids": [
    "678282134",
    "681521788"
  ]
}
```