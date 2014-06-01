optimizely-example/MarcoFabian-Webinar-page-translation-for-DE
=============================================================

https://www.optimizely.com/edit?experiment_id=284960312

```json{
  "name": "[Marco/Fabian] Webinar page translation for DE",
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "www.optimizely.de/resources/live-demo-webinar",
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
    "285477170"
  ],
  "variation_ids": [
    "285557033",
    "285477170"
  ]
}
```