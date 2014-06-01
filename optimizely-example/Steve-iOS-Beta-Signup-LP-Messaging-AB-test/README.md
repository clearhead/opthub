optimizely-example/Steve-iOS-Beta-Signup-LP-Messaging-AB-test
============================================================

https://www.optimizely.com/edit?experiment_id=695320934

```json{
  "name": "[Steve] iOS Beta Signup LP - Messaging A/B test",
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
        ""
      ],
      "names": [
        "experiment_qa"
      ]
    },
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com/mobile",
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
    "699201557",
    "714290448"
  ],
  "variation_ids": [
    "699201557",
    "714290448"
  ]
}
```