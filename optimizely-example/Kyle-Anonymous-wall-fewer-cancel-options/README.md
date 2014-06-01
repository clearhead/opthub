optimizely-example/Kyle-Anonymous-wall-fewer-cancel-options
==========================================================

https://www.optimizely.com/edit?experiment_id=593751629

```json{
  "code": "jQuery(\".spaced:eq(2)\").html('<input type=\"checkbox\" name=\"terms-of-service\" class=\"hidden\" checked>By clicking the \"Create account\" button below I agree to the <span id=\"SL-link-terms\" class=\"SL_swap\"><a href=\"/terms\" target=\"_blank\">Terms of Service</a></span> and <span id=\"SL-link-privacy\" class=\"SL_swap\"><a href=\"/privacy\" target=\"_blank\">Privacy Policy</a></span>.');",
  "name": "[Kyle] Anonymous wall - fewer cancel options",
  "manual": true,
  "enabled": true,
  "conditions": [
    {
      "not": true,
      "type": "cookies",
      "values": [
        "1"
      ],
      "names": [
        "experiment_qa"
      ]
    },
    {
      "type": "url",
      "values": [
        {
          "value": "https://www.optimizely.com/edit",
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
    "632900129",
    "593622022"
  ],
  "variation_weights": {
    "593622022": 5000,
    "632900129": 5000
  },
  "variation_ids": [
    "632900129",
    "641610027",
    "593622022"
  ]
}
```