# netlify-cms-widget-color

This project is a simple color widget for Netlify CMS that uses [react-color](https://github.com/casesandberg/react-color). Remembering all the world's code values for colors is hard. Now you don't have to. Install the color widget so you can make an easy job of things like changing your font color, directly in the editor UI. 

## Install and Usage

### As an npm package:

```shell
npm install --save netlify-cms-widget-color
```

```js
import ColorControl from 'netlify-cms-widget-color'

CMS.registerWidget('color', ColorControl)
```
Add to your config.yml:
```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: color }
```

### Via `script` tag:
```html
<script src="https://unpkg.com/netlify-cms-extended"></script>
<script src="https://unpkg.com/netlify-cms-widget-color"></script>
<script>
  CMS.registerWidget('color', NetlifyCMSColorWidget.default)
</script>
```

## Configuration Options

Option   | Type    | Default   | Description 
---------|---------|-----------|-------------
alpha    | bool    | true      | enable alpha      
presets  | array   | undefined | Define presets color
default  | string  | #ffffff   | Default color

Example:
```yml
- label: "Theme Color"
  name: "color"
  widget: "color"
  format: 'hsl'
  presets: ['red', 'green', 'blue'], default: 'pink'
  alpha: false
```

## Support

For help with this widget, open an [issue](https://github.com/ekoeryanto/netlify-cms-widget-color) or ask the Netlify CMS community in [Gitter](https://gitter.im/netlify/netlifycms).
