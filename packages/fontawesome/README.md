# netlify-cms-widget-fontawesome
Fontawesome widget for Netlify CMS.

## Install and Usage

### As an npm package:

```shell
npm install netlify-cms-widget-fontawesome
```

```js
import CMS from 'netlify-cms'
import * as FontawesomeWidget from 'netlify-cms-widget-fontawesome'
CMS.registerWidget('fontawesome', FontawesomeWidget.Control, FontawesomeWidget.Preview)
```
Add to your config.yml:
```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: fontawesome }
```

### Via `script` tag:
Note: we use `netlify-cms-extended` here, see: netlify/netlify-cms#1292
```html
<script src="https://unpkg.com/netlify-cms-extended"></script>
<script src="https://unpkg.com/netlify-cms-widget-fontawesome"></script>
<script>
  CMS.registerWidget(
    fontawesome,
    NetlifyCMSFontawesomeWidget.Control,
    NetlifyCMSFontawesomeWidget.Preview
  )
</script>
```
