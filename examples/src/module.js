import './boot'
import 'netlify-cms/dist/cms.css'
import { config } from './config'
import CMS, { init } from 'netlify-cms'
import NetlifyCMSWidgetColor from 'netlify-cms-widget-color'
import NetlifyCMSWidgetNativeColor from 'netlify-cms-widget-native-color'
import * as NetlifyCMSWidgetMaterialIcons from 'netlify-cms-widget-material-icons'

CMS.registerWidget('color', NetlifyCMSWidgetColor)
CMS.registerWidget('native-color', NetlifyCMSWidgetNativeColor)
CMS.registerWidget('material-icons', NetlifyCMSWidgetMaterialIcons.Control, NetlifyCMSWidgetMaterialIcons.Preview)
CMS.registerPreviewStyle('https://fonts.googleapis.com/css?family=Material+Icons')

init({ config })
