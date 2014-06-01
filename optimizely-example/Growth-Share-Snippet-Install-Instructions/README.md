optimizely-example/Growth-Share-Snippet-Install-Instructions
===========================================================

https://www.optimizely.com/edit?experiment_id=696941682

```json
{
  "name": "[Growth] Share Snippet Install Instructions",
  "manual": true,
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
    "707221451",
    "699224044"
  ],
  "variation_weights": {
    "699224044": 4999,
    "707221451": 5001
  },
  "variation_ids": [
    "707221451",
    "699224044"
  ]
}
```