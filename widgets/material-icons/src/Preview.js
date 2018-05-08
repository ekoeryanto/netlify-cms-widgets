import createReactClass from 'create-react-class'
import PropTypes from 'prop-types'

export const Preview = createReactClass({
  propTypes: {
    value: PropTypes.node
  },

  render () {
    return <i className='material-icons'>{this.props.value}</i>
  }
})
