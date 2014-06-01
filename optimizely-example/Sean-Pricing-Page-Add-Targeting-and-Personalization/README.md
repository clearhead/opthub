optimizely-example/Sean-Pricing-Page-Add-Targeting-and-Personalization
=====================================================================

https://www.optimizely.com/edit?experiment_id=410530015

```json
{
  "name": "[Sean] Pricing Page: Add Targeting & Personalization",
  "enabled": true,
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com/pricing",
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
    "560850018"
  ],
  "variation_weights": {
    "560850018": 10000
  },
  "variation_ids": [
    "449370004",
    "483480255",
    "542840982",
    "560850018"
  ]
}
```