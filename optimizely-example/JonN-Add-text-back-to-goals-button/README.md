optimizely-example/JonN-Add-text-back-to-goals-button
====================================================

https://www.optimizely.com/edit?experiment_id=688660739

```json
{
  "name": "[JonN] Add text back to goals button",
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "http://optimizely.com/edit",
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
    "688580813"
  ],
  "variation_ids": [
    "680550870",
    "688580813",
    "672842693"
  ]
}
```