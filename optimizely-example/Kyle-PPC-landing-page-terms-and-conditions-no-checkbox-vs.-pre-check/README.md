optimizely-example/Kyle-PPC-landing-page-terms-and-conditions-no-checkbox-vs.-pre-check
======================================================================================

https://www.optimizely.com/edit?experiment_id=620933356

```json
{
  "code": "var krush = {};\nkrush.windowHeight = jQuery(window).height();\nkrush.headerHeight = jQuery('#header_compact').height();\nkrush.mainContainerHeight = krush.windowHeight - krush.headerHeight;\nkrush.mainContainer = jQuery('#main-container');\nkrush.form = jQuery('div.grid7.right');\nkrush.cta = jQuery('div.cta');\nkrush.formHeight = krush.form.height();\nkrush.formTopPadding = (function(){\n\n\tvar topPadding;\n\n\tif(krush.windowHeight > 544){\n\n\t\ttopPadding = (( ( (krush.windowHeight / 2) - (krush.formHeight / 2) ) - krush.headerHeight) + 'px');\n\n\t\tkrush.mainContainer.css('height', krush.mainContainerHeight + 'px')\n\n\t} else {\n\n\t\ttopPadding = krush.cta.css('padding-top');\n\n\t}\n\n\treturn topPadding;\n\n})();\njQuery('div.goals, div.noise, div.seo-customers, #metrics-container').hide();\nkrush.mainContainer.css('padding-bottom', '0').css('background-color', '#fbfbfb');\nkrush.cta.css({'padding': '0', 'border-bottom': '0'});\nkrush.form.attr('id', 'form').removeClass('right').addClass('center').css('padding-top', krush.formTopPadding);",
  "name": "[Kyle] PPC landing page - terms & conditions, no checkbox vs. pre-check",
  "enabled": true,
  "conditions": [
    {
      "not": true,
      "type": "browser",
      "values": [
        "mobile"
      ]
    },
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
    "621233203",
    "593174891"
  ],
  "variation_weights": {
    "593174891": 5000,
    "621233203": 5000
  },
  "variation_ids": [
    "621383291",
    "621233203",
    "593174891"
  ]
}
```