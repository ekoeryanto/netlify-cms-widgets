# netlify-cms-widget-fontawesome

Fontawesome widget for Netlify CMS.

## Install and Usage

### As an npm package:

```shell
npm install netlify-cms-widget-fontawesome @fortawesome/fontawesome-free @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons
```

```js
import CMS from "netlify-cms";
import * as FontawesomeWidget from "netlify-cms-widget-fontawesome";
CMS.registerWidget(
  "fontawesome",
  FontawesomeWidget.Solid,
  FontawesomeWidget.Preview
);
```

Add to your config.yml:

```yaml
    fields:
      - name: <fieldname>
        label: <fieldlabel>
        widget: fontawesome-solid
```

## Example

see `public` directory
