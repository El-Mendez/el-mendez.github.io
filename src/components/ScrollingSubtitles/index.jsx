import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './ScrollingSubtitles.scss';
import PropTypes from 'prop-types';

export default function ScrollingSubtitles(props) {
  const subtitleHeight = window.innerWidth * 0.0678;
  const { subtitlesList } = props;
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const [nextSubtitle, setNextSubtitle] = useState(1);

  const { scroll } = useSpring({
    scroll: nextSubtitle * subtitleHeight,
    from: { scroll: currentSubtitle * subtitleHeight },
    reset: true,
    delay: 200,
    onRest: () => {
      setCurrentSubtitle(nextSubtitle);
      let maybeNextSubtitle = nextSubtitle;
      while (maybeNextSubtitle === nextSubtitle) {
        maybeNextSubtitle = Math.floor(Math.random() * subtitlesList.length);
      }
      setNextSubtitle(maybeNextSubtitle);
    },
  });

  return (
    <animated.div className="scrolling-subtitles-list-container" scrollTop={scroll} data-testid="scrolling-subtitles">
      {subtitlesList.map((word) => <div className="scrolling-subtitle-container" key={word}><h2>{word}</h2></div>)}
    </animated.div>
  );
}

ScrollingSubtitles.propTypes = {
  subtitlesList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
