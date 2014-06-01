optimizely-example/Toby-XING-Share-button-on-German-blog-Hide-sharing-options-on-homepage-feed
=============================================================================================

https://www.optimizely.com/edit?experiment_id=595440056

```json
{
  "name": "[Toby] XING Share button on German blog / Hide sharing options on homepage feed",
  "enabled": true,
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "blog\\.optimizely\\.de/\\d{4}/\\d{2}/\\d{2}/",
          "match": "regex"
        },
        {
          "value": "http://blog.optimizely.de",
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
    "589170038"
  ],
  "variation_weights": {
    "589170038": 10000
  },
  "variation_ids": [
    "589170038"
  ]
}
```