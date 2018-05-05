if (typeof window !== 'undefined' && typeof window.CMS !== 'undefined') {
  const {
    React,
    ReactDOM,
    PropTypes,
    Immutable,
    ImmutablePropTypes,
    classNames,
    createReactClass,
  } = window.CMS

  Object.assign(window, {
    React,
    ReactDOM,
    PropTypes,
    Immutable,
    ImmutablePropTypes,
    classNames,
    createReactClass,
  })
}
