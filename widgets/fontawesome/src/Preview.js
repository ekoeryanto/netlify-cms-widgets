import React from 'react'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export class Preview extends React.Component {
  static propTypes = {
    value: PropTypes.node.isRequired
  }

  render () {
    const {value, ...props} = this.props
    return <FontAwesomeIcon icon={value.split(' ')} {...props} />
  }
}
