import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import PoppingTitle from '../PoppingTitle';
import './Contact.scss';

export default function Contact(props) {
  const { index } = props;

  return (
    <>
      <ParallaxLayer offset={index} className="screen contact-background" />

      <ParallaxLayer offset={index} speed={0.5} className="contact-content">
        <div className="contact-me-methods-container">
          <PoppingTitle.H2 text="Dime Algo" />
          <p>Estoy disponible de lunes a viernes.</p>
          <a href="mailto:men19195@uvg.edu.gt" data-testid="github">
            <button type="button" className="btn btn-primary">CONTÁCTAME</button>
          </a>
        </div>
        <div className="contact-me-methods-container">
          <div className="contact-me-methods">
            <a href="https://github.com/El-Mendez">
              <i className="fab fa-2x fa-github" />
              El-Mendez
            </a>
            <a href="mailto:men19195@uvg.edu.gt" data-testid="github">
              <i className="fas fa-2x fa-envelope" />
              men19195@uvg.edu.gt
            </a>
            <a href="https://www.linkedin.com/in/pablo-m%C3%A9ndez-3677b5217/">
              <i className="fab fa-2x fa-linkedin" />
              Pablo Méndez
            </a>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
}
Contact.propTypes = {
  index: PropTypes.number.isRequired,
};
