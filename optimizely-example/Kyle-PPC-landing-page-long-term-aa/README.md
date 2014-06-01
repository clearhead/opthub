optimizely-example/Kyle-PPC-landing-page-long-term-aa
====================================================

https://www.optimizely.com/edit?experiment_id=644000050

```json
{
  "name": "[Kyle] PPC landing page - long term a/a",
  "enabled": true,
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com/free-trial",
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
    "649160027",
    "643920055"
  ],
  "variation_weights": {
    "643920055": 5000,
    "649160027": 5000
  },
  "variation_ids": [
    "649160027",
    "643920055"
  ]
}
```