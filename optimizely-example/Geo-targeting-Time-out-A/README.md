optimizely-example/Geo-targeting-Time-out-A
==========================================

https://www.optimizely.com/edit?experiment_id=138750142

```json
{
  "name": "Geo targeting Time out A",
  "conditions": [
    {
      "type": "location",
      "values": [
        "|||NA",
        "|||OC",
        "|||AS",
        "AU",
        "|||EU",
        "|||AF",
        "|||SA"
      ]
    },
    {
      "type": "url",
      "values": [
        {
          "value": "http://www.optimizely.com",
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
  "uses_geotargeting": true,
  "enabled_variation_ids": [
    "138753223",
    "138754098"
  ],
  "variation_ids": [
    "138753223",
    "138754098"
  ]
}
```