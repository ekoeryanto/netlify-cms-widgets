import React from 'react'
import PropTypes from 'prop-types'

export class Preview extends React.Component {
  static propTypes = {
    value: PropTypes.node
  }

  render () {
    return <i className='material-icons'>{this.props.value}</i>
  }
}
