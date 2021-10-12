import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxLayer, Parallax } from 'react-spring/renderprops-addons';
import PoppingTitle from '../PoppingTitle';
import './Projects.scss';

import lab04 from '../../assets/img/proyectos/lab04.png';
import lab06 from '../../assets/img/proyectos/lab06.png';
import lab08 from '../../assets/img/proyectos/lab08.png';
import lab10 from '../../assets/img/proyectos/lab10.png';
import proyecto1 from '../../assets/img/proyectos/proyecto1.png';
import proyecto2 from '../../assets/img/proyectos/proyecto2.png';

export default function Projects(props) {
  const { index } = props;

  const proyectos = [
    { image: lab04, link: 'http://stw-uvg.site/labs/lab04/Mendez19195', name: 'Nintendo Switch con solo CSS' },
    { image: lab06, link: 'http://stw-uvg.site/labs/lab06/Mendez19195/', name: 'Chat usando Express' },
    { image: lab08, link: 'https://github.com/El-Mendez/Web_Lab08', name: 'Juego de Memoria con React' },
    { image: lab10, link: 'https://github.com/El-Mendez/Web_Lab10', name: 'Calculadora Web con React' },
    { image: proyecto1, link: 'https://github.com/El-Mendez/Web_Proyecto1', name: 'Imitar a la página Daily.dev' },
    { image: proyecto2, link: 'https://github.com/El-Mendez/Web_Proyecto2_Chat', name: 'Chat usando firebase' },
  ];

  return (
    <>
      <ParallaxLayer offset={index} className="screen projects-content">
        <Parallax pages={proyectos.length + 1} horizontal className="screen-container">
          <ParallaxLayer offset={0} speed={0.54} className="d-flex justify-content-center align-content-center text-center flex-column">
            <PoppingTitle.H1 text="Proyectos" />
            <p>Scrollea a la derecha</p>
          </ParallaxLayer>

          { proyectos.map((proyecto, i) => (
            <ParallaxLayer
              offset={i + 1}
              speed={0.5}
              key={proyecto.name}
              className="d-flex justify-content-center align-content-center text-center flex-column"
            >
              <PoppingTitle.H2 text={proyecto.name} key={proyecto.image} />
              <a href={proyecto.link}><img src={proyecto.image} alt={proyecto.name} /></a>
            </ParallaxLayer>
          ))}
        </Parallax>
      </ParallaxLayer>
    </>
  );
}

Projects.propTypes = {
  index: PropTypes.number.isRequired,
};
