import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import PoppingTitle from '../PoppingTitle';
import './Quote.scss';

export default function Quote(props) {
  const { index, quote, author } = props;
  return (
    <>
      <ParallaxLayer offset={index} className="screen quote-background" />
      <ParallaxLayer offset={index} speed={0.8} className="quote-content">
        <PoppingTitle.H2 text={quote} />
        <p className="font-weight-light">{author}</p>
      </ParallaxLayer>
    </>
  );
}

Quote.propTypes = {
  index: PropTypes.number.isRequired,
  quote: PropTypes.string,
  author: PropTypes.string,
};
Quote.defaultProps = {
  quote: 'Página en construcción',
  author: 'Unknown, ???',
};
