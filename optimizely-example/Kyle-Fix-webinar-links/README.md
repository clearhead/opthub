optimizely-example/Kyle-Fix-webinar-links
========================================

https://www.optimizely.com/edit?experiment_id=785140643

```json{
  "name": "[Kyle] Fix webinar links",
  "enabled": true,
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com/resources/live-demo-webinar",
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
    "784790622"
  ],
  "variation_weights": {
    "784790622": 10000
  },
  "variation_ids": [
    "784790622"
  ]
}
```