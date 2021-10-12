import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import './Abilities.scss';

import java from '../../assets/img/skills/java.png';
import kotlin from '../../assets/img/skills/kotlin.png';
import django from '../../assets/img/skills/django.png';
import express from '../../assets/img/skills/express.png';
import reactImage from '../../assets/img/skills/react.png';
import python from '../../assets/img/skills/python.png';

export default function Abilities(props) {
  const { index } = props;

  const skills = [
    { image: java, name: 'java' },
    { image: kotlin, name: 'kotlin' },
    { image: django, name: 'django' },
    { image: express, name: 'express' },
    { image: reactImage, name: 'react' },
    { image: python, name: 'python' },
  ];
  return (
    <>
      <ParallaxLayer offset={index} className="screen abilities-background" />

      <ParallaxLayer offset={index} speed={0.8} className="abilities-content">
        <div className="skills-empty-div" />
        { skills.map((skill) => <img className="img-abilities-shadow" key={skill.image} alt={skill.name} src={skill.image} />)}
      </ParallaxLayer>

      <ParallaxLayer offset={index} speed={0.5} className="abilities-content">
        <h2>Mis habilidades</h2>
        { skills.map((skill) => <img key={skill.image} src={skill.image} alt={skill.name} />)}
      </ParallaxLayer>
    </>
  );
}
Abilities.propTypes = {
  index: PropTypes.number.isRequired,
};
