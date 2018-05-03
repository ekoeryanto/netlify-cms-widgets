# netlify-cms-widget-color

This project is a simple color widget for Netlify CMS that uses [react-color](https://github.com/casesandberg/react-color). Remembering all the world's code values for colors is hard. Now you don't have to. Install the color widget so you can make an easy job of things like changing your font color, directly in the editor UI. 

## Install and Usage

### As an npm package:

```shell
npm install netlify-cms-widget-color
```

```js
import CMS from 'netlify-cms'
import ColorWidget from 'netlify-cms-widget-color'
CMS.registerWidget('color', ColorWidget)
```
Add to your config.yml:
```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: color }
```

### Via `script` tag:
Note: we use `netlify-cms-extended` here, see: netlify/netlify-cms#1292
```html
<script src="https://unpkg.com/netlify-cms-extended"></script>
<script src="https://unpkg.com/netlify-cms-widget-color"></script>
<script>
  CMS.registerWidget(color, NetlifyCMSWidgetColor)
</script>
```
