# netlify-cms-widget-native-color

Native Color widget for Netlify CMS.

## Install and Usage

### As an npm package:

```shell
npm install netlify-cms-widget-native-color
```

```js
import CMS from 'netlify-cms'
import * as NativeColorWidget from 'netlify-cms-widget-native-color'
CMS.registerWidget('native-color', NativeColorWidget.Control)
```

Add to your config.yml:

```yaml
    fields:
      - name: <fieldname>
        label: <fieldlabel>
        widget: native-color
```

## Example

see `public` directory
