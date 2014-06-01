optimizely-example/Growth-Account-Level-Bucketing-and-act-Snippet-Share
======================================================================

https://www.optimizely.com/edit?experiment_id=696914908

```json
{
  "name": "[Growth] Account Level Bucketing & act Snippet Share",
  "enabled": true,
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
    "704844936"
  ],
  "variation_weights": {
    "704844936": 10000
  },
  "variation_ids": [
    "704844936"
  ]
}
```