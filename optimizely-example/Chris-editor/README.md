optimizely-example/Chris-editor
==============================

https://www.optimizely.com/edit?experiment_id=791852274

```json{
  "name": "[Chris] editor",
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com/edit?experiment_id=798174897",
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
    "791261208",
    "794760261"
  ],
  "variation_ids": [
    "791261208",
    "794760261"
  ]
}
```