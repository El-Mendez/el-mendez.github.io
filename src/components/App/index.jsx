import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons';
import '@fortawesome/fontawesome-free/css/all.css';

import Cover from '../Cover';
import AboutMe from '../AboutMe';
import Abilities from '../Abilities';
// import Projects from '../Projects';
import Contact from '../Contact';
import Quote from '../Quote';
import './App.scss';

export default function App() {
  return (
    <Parallax pages={6} className="screen-container">
      <Cover index={0} />
      <AboutMe index={1} />
      <Quote index={2} quote="&apos;&apos;Eres un crack&apos;&apos;" author="Ludwing Cano, 2021" />
      <Abilities index={3} />
      <Quote index={4} quote="&apos;&apos;Conozco a 10 web developers y Méndez es 9 de ellos&apos;&apos;" author="Jose Hurtarte, 2021" />
      {/* <Projects index={5} /> */}
      <Contact index={5} />
    </Parallax>
  );
}
