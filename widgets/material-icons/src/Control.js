import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ReactList from '@pake/react-list/esm/react-list.min';
import icons from 'material-design-icon-list/data/list.json';
import MaterialIcon from './MaterialIcon';

export default createReactClass({
  propTypes: {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string.isRequired,
    value: PropTypes.node.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
    classNameWrapper: PropTypes.string.isRequired,
    field: ImmutablePropTypes.mapContains({
      default: PropTypes.string,
    }).isRequired,
  },

  getInitialState() {
    return {
      choose: false,
    };
  },

  getDdefaultProps() {
    return { value: '' };
  },

  render() {
    const {
      forID,
      field,
      value,
      setActiveStyle,
      setInactiveStyle,
      classNameWrapper,
      onChange,
    } = this.props;
    const currentValue = value || field.get('default');

    const pageSize = 10;
    const currenIndex = icons.indexOf(currentValue);

    const { choose } = this.state;

    return (
      <div
        id={forID}
        className={classNameWrapper}
        onBlur={setInactiveStyle}
        onFocus={setActiveStyle}
        style={{ overflow: 'auto' }}
      >
        {choose ? (
          <ReactList
            useStaticSize
            axis="x"
            initialIndex={currenIndex}
            pageSize={pageSize}
            length={icons.length}
            type="uniform"
            itemRenderer={(x, key) => (
              <MaterialIcon
                icon={icons[x]}
                color={currenIndex === x ? '#1976D2' : '#3F51B5'}
                onKeyDown={e => e.keyCode === 13 && onChange(e.target.textContent)}
                tabIndex={0}
                key={key}
                onClick={e => onChange(e.target.textContent)}
              />
            )}
          />
        ) : (
          <MaterialIcon
            icon={currentValue}
            onClick={() => this.setState({ choose: true })}
            onKeyDown={e => e.keyCode === 13 && this.setState({ choose: true })}
          />
        )}
      </div>
    );
  },
});
