import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import PropTypes from 'prop-types';
import './Cover.scss';
import ScrollingSubtitles from '../ScrollingSubtitles';
import PoppingTitle from '../PoppingTitle';

export default function Cover(props) {
  const { index } = props;
  const subtitles = [
    'Portafolio',
    'Javascript',
    'Typescript',
    'Java',
    'Kotlin',
    'React',
    'Express',
    'Python',
    'Django',
    'Golang',
    'Linux Servers',
    'AWS',
  ];

  return (
    <>
      <ParallaxLayer offset={index} className="screen cover-background" />
      <ParallaxLayer offset={index} speed={0.5} className="cover-content">

        <PoppingTitle.H1 text="Pablo Méndez" />
        <ScrollingSubtitles subtitlesList={subtitles} />
        <i className="fas fa-angle-down" />

      </ParallaxLayer>
    </>
  );
}
Cover.propTypes = {
  index: PropTypes.number.isRequired,
};
