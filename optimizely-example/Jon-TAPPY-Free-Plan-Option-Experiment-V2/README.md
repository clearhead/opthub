optimizely-example/Jon-TAPPY-Free-Plan-Option-Experiment-V2
==========================================================

https://www.optimizely.com/edit?experiment_id=590230106

```json{
  "name": "[Jon] TAPPY: Free Plan Option (Experiment V2)",
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "http://optimizely.com/pricing",
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
    "582952555",
    "590490039"
  ],
  "variation_ids": [
    "582952555",
    "590490039"
  ]
}
```