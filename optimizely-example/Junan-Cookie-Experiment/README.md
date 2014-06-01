optimizely-example/Junan-Cookie-Experiment
=========================================

https://www.optimizely.com/edit?experiment_id=338821625

```json
{
  "name": "[Junan] Cookie Experiment",
  "enabled": true,
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "optimizely.com/dashboard",
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
    "339424446"
  ],
  "variation_weights": {
    "339424446": 10000
  },
  "variation_ids": [
    "340507005",
    "339424446"
  ]
}
```