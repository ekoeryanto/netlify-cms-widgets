// export { default as Control } from './FontawesomeControl'
// export { default as Preview } from './FontawesomePreview'
import React from 'react'
import createClass from 'create-react-class'
import Select from 'react-select'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export const Control = createClass({
  getInitialState () {
    const { field, value } = this.props
    const selected = value ? value.get(1) : field.get('default', 'google')
    const style = field.get('default-style', 'solid')
    const styles = field.has('styles')
      ? field.get('styles').toArray()
      : ['solid', 'regular', 'brands']

    return {
      selected,
      style,
      styles
    }
  },
  getStyle: {
    solid: import('@fortawesome/fontawesome-free-solid'),
    brands: import('@fortawesome/fontawesome-free-brands'),
    regular: import('@fortawesome/fontawesome-free-regular')
  },
  setOptions (style) {
    this.getStyle[style].then(({ default: icons }) => {
      fontawesome.library.add(icons)
      const options = Object.keys(icons).map(i => ({
        prefix: icons[i].prefix,
        name: icons[i].iconName
      }))
      this.setState({ options })
    })
  },
  componentDidMount () {
    this.setOptions(this.state.style)
  },
  handleChange (option) {
    this.setState({ selected: option })
    this.props.onChange(Object.values(option))
  },
  styleChange (e) {
    this.setState({ style: e.target.value })
    this.setOptions(e.target.value)
  },
  renderOption (option) {
    const icon = Object.values(option)
    return React.createElement(
      'div',
      null,
      React.createElement(FontAwesomeIcon, { icon, size: 'lg' }),
      React.createElement('span', { style: { marginLeft: 5 } }, option.name)
    )
  },
  renderValue (option) {
    const icon = Object.values(option)
    return React.createElement(
      'div',
      null,
      React.createElement(FontAwesomeIcon, { icon, size: 'lg' }),
      React.createElement('span', { style: { marginLeft: 5 } }, option.name)
    )
  },
  render () {
    return React.createElement(
      'div',
      { className: 'section' },
      React.createElement(Select, {
        labelKey: 'name',
        valueKey: 'name',
        options: this.state.options,
        optionRenderer: this.renderOption,
        onChange: this.handleChange,
        value: this.state.selected,
        valueRenderer: this.renderValue
      }),
      React.createElement(
        'div',
        { className: 'hint' },
        this.state.styles.length > 1 && this.state.styles.map(t =>
          React.createElement(
            'label',
            null,
            React.createElement('input', {
              checked: this.state.style === t,
              onChange: this.styleChange,
              type: 'radio',
              value: t
            }),
            t
          )
        )
      )
    )
  }
})

export const Preview = createClass({
  render () {
    return React.createElement(FontAwesomeIcon, {
      icon: Object.values(this.props.value),
      size: 'lg'
    })
  }
})
