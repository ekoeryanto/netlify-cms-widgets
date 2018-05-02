import PropTypes from 'prop-types'
import React from 'react'

export default class MaterialIconsPreview extends React.Component {
  static propTypes = {
    value: PropTypes.node
  }

  render () {
    return (
      <i className='material-icons'>{ this.props.value }</i>
    )
  }
}
