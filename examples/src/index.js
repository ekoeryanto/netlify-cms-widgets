import CMS from 'netlify-cms-extended'
import Color from 'netlify-cms-widget-color'
import NativeColor from 'netlify-cms-widget-native-color'
import MaterialIcons from 'netlify-cms-widget-material-icons'

CMS.registerWidget('color', Color)
CMS.registerWidget('native-color', NativeColor)
CMS.registerWidget('material-icons', MaterialIcons)
