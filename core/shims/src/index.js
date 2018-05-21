/* global window */
if (typeof window !== 'undefined') {
  window.React = window.React || window.CMS.React;
  window.ReactDOM = window.ReactDOM || window.CMS.ReactDOM;
  window.createReactClass =
    window.createReactClass || window.CMS.createReactClass || window.createClass;
  window.Immutable = window.Immutable || window.CMS.Immutable;
  window.classNames = window.classNames || window.CMS.classNames;
  window.PropTypes = window.PropTypes || window.CMS.PropTypes;
  window.ImmutablePropTypes = window.ImmutablePropTypes || window.CMS.ImmutablePropTypes;
}
