import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';

function H1(props) {
  const [shouldGrow, setGrow] = useState(false);
  const { text } = props;

  const springTitleGrow = useSpring({
    from: { transform: shouldGrow ? 'scale(1)' : 'scale(1.1)' },
    to: { transform: !shouldGrow ? 'scale(1)' : 'scale(1.1)' },
  });

  return (
    <animated.h1
      style={springTitleGrow}
      onMouseEnter={() => { setGrow(true); }}
      onMouseLeave={() => { setGrow(false); }}
    >
      {text}
    </animated.h1>
  );
}
H1.propTypes = { text: PropTypes.string.isRequired };

function H2(props) {
  const [shouldGrow, setGrow] = useState(false);
  const { text } = props;

  const springTitleGrow = useSpring({
    from: { transform: shouldGrow ? 'scale(1)' : 'scale(1.1)' },
    to: { transform: !shouldGrow ? 'scale(1)' : 'scale(1.1)' },
  });

  return (
    <animated.h2
      style={springTitleGrow}
      onMouseEnter={() => { setGrow(true); }}
      onMouseLeave={() => { setGrow(false); }}
    >
      {text}
    </animated.h2>
  );
}
H2.propTypes = { text: PropTypes.string.isRequired };

const PoppingTitle = { H1, H2 };
export default PoppingTitle;
