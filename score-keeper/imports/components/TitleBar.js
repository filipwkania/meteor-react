import React from 'react';
import PropTypes from 'prop-types';

export default function TitleBar(props) {
  return (
    <div className="title-bar">
      <div className="wrapper">
        <h1>{props.title}</h1>
        {props.subtitle 
          ?
          <h2 className="title-bar__subtitle">{props.subtitle}</h2>
          :''}
      </div>
    </div>
  );
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

TitleBar.defaultProps = {
  //title: 'DefaultTitle';
};