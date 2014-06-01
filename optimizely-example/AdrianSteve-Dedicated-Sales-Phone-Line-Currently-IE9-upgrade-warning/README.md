optimizely-example/AdrianSteve-Dedicated-Sales-Phone-Line-Currently-IE9-upgrade-warning
======================================================================================

https://www.optimizely.com/edit?experiment_id=187010911

```json
{
  "name": "[AdrianSteve] Dedicated Sales Phone Line - Currently IE9 upgrade warning",
  "conditions": [
    {
      "type": "browser",
      "values": [
        "ie9"
      ]
    },
    {
      "type": "url",
      "values": [
        {
          "value": "optimizely.com/edit",
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
    "187786070"
  ],
  "variation_ids": [
    "187475866",
    "187786070"
  ]
}
```