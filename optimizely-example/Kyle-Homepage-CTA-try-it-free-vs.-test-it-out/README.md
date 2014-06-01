optimizely-example/Kyle-Homepage-CTA-try-it-free-vs.-test-it-out
===============================================================

https://www.optimizely.com/edit?experiment_id=596961628

```json
{
  "name": "[Kyle] Homepage CTA - try it free vs. test it out",
  "conditions": [
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com",
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
    "594081868",
    "603121764"
  ],
  "variation_ids": [
    "594081868",
    "603121764"
  ]
}
```