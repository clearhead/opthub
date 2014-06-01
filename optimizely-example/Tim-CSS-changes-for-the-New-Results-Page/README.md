optimizely-example/Tim-CSS-changes-for-the-New-Results-Page
==========================================================

https://www.optimizely.com/edit?experiment_id=827295518

```json
{
  "name": "[Tim] CSS changes for the New Results Page",
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com/results2",
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
    "828095865",
    "827415643"
  ],
  "variation_ids": [
    "828095865",
    "827415643"
  ]
}
```