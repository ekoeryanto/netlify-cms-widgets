# netlify-cms-widget-material-icons
Material Icons widget for Netlify CMS.

## Install and Usage

### As an npm package:

```shell
npm install netlify-cms-widget-material-icons
```

Add to your `index.html`
```html
<link href='https://fonts.googleapis.com/css?family=Material+Icons' rel="stylesheet">
```

```js
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import CMS from 'netlify-cms'
import * as MaterialIconsWidget from 'netlify-cms-widget-material-icons'

CMS.registerWidget(
  'material-icons',
  MaterialIconsWidget.Control,
  MaterialIconsWidget.Preview
)

CMS.registerPreviewStyle(
  'https://fonts.googleapis.com/css?family=Material+Icons'
)

```
Add to your config.yml:
```yml
fields:
  - name: <fieldname>
    label: <fieldlabel>
    widget: material-icons
```

### Via `script` tag:
Note: we use `netlify-cms-extended` here, see: netlify/netlify-cms#1292
```html
<link href="https://unpkg.com/react-select/dist/react-select.css" rel="stylesheet">
<link href="https://unpkg.com/react-virtualized/styles.css" rel="stylesheet">
<link href="https://unpkg.com/react-virtualized-select/styles.css" rel="stylesheet">
<script src="https://unpkg.com/netlify-cms-extended"></script>
<script src="https://unpkg.com/netlify-cms-widget-material-icons"></script>
<script>
  CMS.registerWidget(
    material-icons,
    NetlifyCMSWidgetMaterialIcons.Control,
    NetlifyCMSWidgetMaterialIcons.Preview
  )
</script>
```
