import { config } from './config'

/* eslint-disable no-undef */
window.CMS.registerWidget('color', NetlifyCMSColorWidget)
window.CMS.registerWidget('native-color', NetlifyCMSNativeColorWidget)
window.CMS.registerWidget('material-icons', NetlifyCMSMaterialIconsWidget.Control, NetlifyCMSMaterialIconsWidget.Preview)
window.CMS.registerPreviewStyle('https://fonts.googleapis.com/css?family=Material+Icons')
window.initCMS({ config })
