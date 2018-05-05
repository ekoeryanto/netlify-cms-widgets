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

  Object.assign(window.CMS, {
    React,
    ReactDOM,
    PropTypes,
    Immutable,
    ImmutablePropTypes,
    classNames,
    createReactClass,
  })
}
