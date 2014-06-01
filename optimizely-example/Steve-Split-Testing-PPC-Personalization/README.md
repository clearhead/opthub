optimizely-example/Steve-Split-Testing-PPC-Personalization
=========================================================

https://www.optimizely.com/edit?experiment_id=817160301

```json
{
  "name": "[Steve] Split Testing PPC Personalization",
  "conditions": [
    {
      "type": "query",
      "values": [
        {
          "value": "wiwo",
          "key": "utm_content"
        }
      ]
    },
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com/split-testing",
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
    "815790355"
  ],
  "variation_ids": [
    "816780492",
    "815790355"
  ]
}
```