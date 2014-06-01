optimizely-example/Fabian-German-Get-Started-Button
==================================================

https://www.optimizely.com/edit?experiment_id=256970873

```json{
  "name": "[Fabian] German Get Started Button",
  "enabled": true,
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "http://www.optimizely.de",
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
    "254169394",
    "256970874"
  ],
  "variation_weights": {
    "254169394": 5001,
    "256970874": 4999
  },
  "variation_ids": [
    "254169394",
    "256970874"
  ]
}
```