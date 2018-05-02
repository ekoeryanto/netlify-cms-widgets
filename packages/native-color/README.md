# netlify-cms-widget-native-color
Native Color widget for Netlify CMS.

## Install and Usage

### As an npm package:

```shell
npm install netlify-cms-widget-native-color
```

```js
import CMS from 'netlify-cms'
import NativeColorWidget from 'netlify-cms-widget-native-color'
CMS.registerWidget('native-color', NativeColorWidget)
```
Add to your config.yml:
```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: native-color }
```

### Via `script` tag:
Note: we use `netlify-cms-extended` here, see: netlify/netlify-cms#1292
```html
<script src="https://unpkg.com/netlify-cms-extended"></script>
<script src="https://unpkg.com/netlify-cms-widget-native-color"></script>
<script>
  CMS.registerWidget(native-color, NetlifyCMSNativeColorWidget)
</script>
```
