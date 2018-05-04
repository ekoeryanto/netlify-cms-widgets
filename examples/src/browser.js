import { config } from './config'

/* eslint-disable no-undef */
window.CMS.registerWidget('color', NetlifyCMSWidgetColor)

window.CMS.registerWidget('native-color', NetlifyCMSWidgetNativeColor)

window.CMS.registerWidget('material-icons', NetlifyCMSWidgetMaterialIcons.Control, NetlifyCMSWidgetMaterialIcons.Preview)
window.CMS.registerPreviewStyle('https://fonts.googleapis.com/css?family=Material+Icons')

CMS.registerWidget('fontawesome-solid', NetlifyCMSWidgetFontawesome.Solid.Control, NetlifyCMSWidgetFontawesome.Preview)
CMS.registerWidget('fontawesome-regular', NetlifyCMSWidgetFontawesome.Regular.Control, NetlifyCMSWidgetFontawesome.Preview)
CMS.registerWidget('fontawesome-brands', NetlifyCMSWidgetFontawesome.Brands.Control, NetlifyCMSWidgetFontawesome.Preview)

window.initCMS({ config })
