# netlify-cms-widget-color

Remembering all the world's code values for colors is hard. Now you don't have to. Install the color widget so you can make an easy job of things like changing your font color, directly in the editor UI.

## Install and Usage

### As an npm package:

```shell
npm install netlify-cms-widget-color @pake/react-color
```

```js
import CMS from "netlify-cms";
import * as ColorWidget from "netlify-cms-widget-color";
CMS.registerWidget("color", ColorWidget.Control);
```

Add to your config.yml:

```yaml
    fields:
      - name: <fieldname>
        label: <fieldlabel>
        widget: color
```

## Example

see `public` directory
