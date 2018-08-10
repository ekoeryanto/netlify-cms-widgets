# netlify-cms-widget-material-icons

Material Icons widget for Netlify CMS.

## Install and Usage

### As an npm package:

```shell
npm install netlify-cms-widget-material-icons
```

```scss
// css
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
@import "react-select/dist/react-select.css";
@import "react-virtualized/styles.css";
@import "react-virtualized-select/styles.css";
```

```js
// js
import CMS from "netlify-cms";
import * as MaterialIconsWidget from "netlify-cms-widget-material-icons";
CMS.registerWidget(
  "material-icons",
  MaterialIconsWidget.Control,
  MaterialIconsWidget.Preview
);
CMS.registerPreviewStyle(
  "https://fonts.googleapis.com/css?family=Material+Icons"
);
```

Add to your config.yml:

```yaml
    fields:
      - name: <fieldname>
        label: <fieldlabel>
        widget: material-icons
```

## Example

see `public` directory
