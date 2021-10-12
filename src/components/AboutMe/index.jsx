import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import './AboutMe.scss';
import drawing from '../../assets/img/Drawing.png';

export default function AboutMe(props) {
  const { index } = props;
  return (
    <>
      <ParallaxLayer offset={index} className="screen about-me-background" />

      <ParallaxLayer offset={index} speed={0.8} className="about-me-content">
        <h2>Quién soy yo?</h2>
        <div className="about-me-text-shadow" />
        <div className="imagen-yo-shadow" />
      </ParallaxLayer>

      <ParallaxLayer offset={index} speed={0.5} className="about-me-content">
        <div className="empty-div" />
        <div>
          <p>
            Soy un estudiante de la universidad del Valle de Guatemala. Actualmente estoy en el
            tercer año de mi carrera.
          </p>
          <p>
            Vivo en Guatemala. Mis pasatiempos son leer y jugar videojuegos.
          </p>
        </div>
        <img alt="Yo" className="imagen-yo" src={drawing} />
      </ParallaxLayer>
    </>
  );
}
AboutMe.propTypes = {
  index: PropTypes.number.isRequired,
};
