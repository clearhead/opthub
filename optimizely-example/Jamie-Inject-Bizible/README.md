optimizely-example/Jamie-Inject-Bizible
======================================

https://www.optimizely.com/edit?experiment_id=667050051

```json
{
  "code": "/* _optimizely_evaluate=force */\n  var scriptTag = document.createElement('script');  \n  scriptTag.setAttribute(\"type\",\"text/javascript\");\n  scriptTag.setAttribute('async','true');\n  scriptTag.setAttribute('src','//cdn.bizible.com/_biz-a.js');\n  scriptTag.setAttribute('data-attach-secure-forms','true');\n  document.head.appendChild(scriptTag);",
  "name": "[Jamie] Inject Bizible",
  "enabled": true,
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "optimizely.com",
          "match": "substring"
        }
      ]
    },
    {
      "not": true,
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com/edit",
          "match": "simple"
        },
        {
          "value": "https://www.optimizely.com/dashboard",
          "match": "simple"
        },
        {
          "value": "https://www.optimizely.com/results",
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
    "621620120",
    "622090167"
  ],
  "variation_weights": {
    "621620120": 5000,
    "622090167": 5000
  },
  "variation_ids": [
    "621620120",
    "622090167"
  ]
}
```