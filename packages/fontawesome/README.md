# netlify-cms-widget-fontawesome
Fontawesome widget for Netlify CMS.

## Install and Usage

### As an npm package:

```shell
npm install netlify-cms-widget-fontawesome
```

```js
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import CMS from 'netlify-cms'
import * as NetlifyCMSWidgetFontawesome from 'netlify-cms-widget-fontawesome'
CMS.registerWidget('fontawesome', NetlifyCMSWidgetFontawesome.Regular, NetlifyCMSWidgetFontawesome.Preview)
```
Add to your config.yml:
```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: fontawesome }
```

### Via `script` tag:
Note: we use `netlify-cms-extended` here, see: netlify/netlify-cms#1292
```html
<link href="https://unpkg.com/react-select/dist/react-select.css" rel="stylesheet">
<link href="https://unpkg.com/react-virtualized/styles.css" rel="stylesheet">
<link href="https://unpkg.com/react-virtualized-select/styles.css" rel="stylesheet">
<script src="https://unpkg.com/netlify-cms-extended"></script>
<script src="https://unpkg.com/netlify-cms-widget-fontawesome"></script>
<script>
  CMS.registerWidget(
    'fontawesome',
    NetlifyCMSWidgetFontawesome.Solid,
    NetlifyCMSWidgetFontawesome.Preview
  )
</script>
```
