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
