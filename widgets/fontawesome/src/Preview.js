import createReactClass from 'create-react-class'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export const Preview = createReactClass({
  propTypes: {
    value: PropTypes.node.isRequired
  },

  render () {
    const { value, ...props } = this.props
    return <FontAwesomeIcon icon={value.split(' ')} {...props} />
  }
})
