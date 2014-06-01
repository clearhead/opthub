optimizely-example/Jerry-European-Roadshow-page-updates
======================================================

https://www.optimizely.com/edit?experiment_id=565511770

```json
{
  "name": "[Jerry] European Roadshow page updates",
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com/roadshow",
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
    "588480066"
  ],
  "variation_ids": [
    "585232765",
    "588480066"
  ]
}
```