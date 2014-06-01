optimizely-example/Toby-Editor-tabs-display-issue-exp-for-FR-311-temporary-will-delete-when-bug-closed
=====================================================================================================

https://www.optimizely.com/edit?experiment_id=709090215

```json
{
  "name": "[Toby] Editor tabs display issue exp for [FR-311] (temporary, will delete when bug closed)",
  "conditions": [
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
    "739880212"
  ],
  "variation_ids": [
    "739880212"
  ],
  "css": "#container.edit #toolbar #sections .section {\n\tmin-width:25px;\n\tpadding-left:10px;\n\tpadding-right:10px\n}"
}
```