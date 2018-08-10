# netlify-cms-widget-fontawesome

Fontawesome widget for Netlify CMS.

## Install and Usage

### As an npm package:

```shell
npm install netlify-cms-widget-fontawesome react-virtualized-select @fortawesome/fontawesome-free @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons
```

```scss
@import "react-select/dist/react-select.css";
@import "react-virtualized/styles.css";
@import "react-virtualized-select/styles.css";
```

```js
import CMS from "netlify-cms";
import * as FontawesomeWidget from "netlify-cms-widget-fontawesome";
import "react-select/dist/react-select.css";
import "react-virtualized/styles.css";
import "react-virtualized-select/styles.css";
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
