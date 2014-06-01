optimizely-example/Natarajan-Free-trial-speedup-reset-3
======================================================

https://www.optimizely.com/edit?experiment_id=553040798

```json
{
  "name": "[Natarajan] Free trial speedup reset (3)",
  "enabled": true,
  "conditions": [
    {
      "type": "code",
      "value": "var pageA = \"https://www.optimizely.com/free-trial\";\nvar pageB = \"https://www.optimizely.com/edit\";\nvar url = window.location.href.replace(/\\?\\S+/,'');\nvar url_referrer = document.referrer.replace(/\\?\\S+/,'');\n\nif(url=pageA){\n\t true;\n}\nelse if(url=pageB && url_referrer=pageA){\n\t true;\n}\nelse {\n\t false;\n}"
    },
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com/free-trial",
          "match": "simple"
        },
        {
          "value": "optimizely.com/edit",
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
    "545380383"
  ],
  "variation_weights": {
    "545380383": 10000
  },
  "variation_ids": [
    "548831373",
    "547250833",
    "547250834",
    "545380383"
  ]
}
```