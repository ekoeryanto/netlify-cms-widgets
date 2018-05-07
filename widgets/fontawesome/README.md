# netlify-cms-widget-fontawesome

Fontawesome widget for Netlify CMS.

## Install and Usage

### As an npm package:

```shell
npm install netlify-cms-widget-fontawesome react-virtualized-select @fortawesome/fontawesome @fortawesome/react-fontawesome @fortawesome/fontawesome-free-solid
```

```scss
// css
@import "netlify-cms/dist/cms.css";
@import "react-select/dist/react-select.css";
@import "react-virtualized/styles.css";
@import "react-virtualized-select/styles.css";
```

```js
// js
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

see `public` directory and note that we are using `netlify-cms-extended` there.

See [here](https://github.com/netlify/netlify-cms/pull/1292)
for more info.
