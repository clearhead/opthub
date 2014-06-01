optimizely-example/Kyle-Guiders
==============================

https://www.optimizely.com/edit?experiment_id=567761079

```json
{
  "name": "[Kyle] Guiders",
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "(?!\\b.*[&?]name=)https\\:\\/\\/www\\.optimizely\\.com\\/edit",
          "match": "regex"
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
    "581140217",
    "566521890",
    "567550912"
  ],
  "variation_ids": [
    "581140217",
    "566521890",
    "567550912"
  ]
}
```