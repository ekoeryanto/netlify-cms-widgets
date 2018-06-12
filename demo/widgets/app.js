import 'netlify-cms/dist/cms.css';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import CMS from 'netlify-cms';
import NetlifyCMSWidgetColor from 'netlify-cms-widget-color';
import NetlifyCMSWidgetFontawesome from 'netlify-cms-widget-fontawesome';
import NetlifyCMSWidgetMaterialIcons from 'netlify-cms-widget-material-icons';
import NetlifyCMSWidgetNativeColor from 'netlify-cms-widget-native-color';

CMS.registerWidget('color', NetlifyCMSWidgetColor.Control);

CMS.registerWidget(
  'fontawesome-solid',
  NetlifyCMSWidgetFontawesome.Solid,
  NetlifyCMSWidgetFontawesome.Preview,
);
CMS.registerWidget(
  'fontawesome-regular',
  NetlifyCMSWidgetFontawesome.Regular,
  NetlifyCMSWidgetFontawesome.Preview,
);
CMS.registerWidget(
  'fontawesome-brands',
  NetlifyCMSWidgetFontawesome.Brands,
  NetlifyCMSWidgetFontawesome.Preview,
);

CMS.registerPreviewStyle('https://fonts.googleapis.com/css?family=Material+Icons');
CMS.registerWidget(
  'material-icons',
  NetlifyCMSWidgetMaterialIcons.Control,
  NetlifyCMSWidgetMaterialIcons.Preview,
);

CMS.registerWidget('native-color', NetlifyCMSWidgetNativeColor.Control);
