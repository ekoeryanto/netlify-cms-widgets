import PropTypes from 'prop-types'
import React from 'react'

export default class FontawesomePreview extends React.Component {
  static propTypes = {
    value: PropTypes.node,
  }

  render () {
    return (
      <div>{ this.props.value }</div>
    )
  }
}
