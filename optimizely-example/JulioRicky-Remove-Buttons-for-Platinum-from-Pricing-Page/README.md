optimizely-example/JulioRicky-Remove-Buttons-for-Platinum-from-Pricing-Page
==========================================================================

https://www.optimizely.com/edit?experiment_id=721452876

```json
{
  "name": "[JulioRicky] Remove Buttons for Platinum from Pricing Page",
  "manual": true,
  "enabled": true,
  "conditions": [
    {
      "type": "code",
      "value": "$('#plan').val() == \"platinum\";"
    },
    {
      "type": "url",
      "values": [
        {
          "value": "http://www.optimizely.com/pricing",
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
    "747264739"
  ],
  "variation_weights": {
    "747264739": 10000
  },
  "variation_ids": [
    "708026674",
    "747264739"
  ]
}
```