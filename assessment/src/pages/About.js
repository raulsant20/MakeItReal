import React from 'react';
import Menu from '../Components/Menu';
import foto from '../img/foto.png';
import './About.css';

export default function About() {
  return (
    <div>
      <Menu />
      <section className="About">
        <img className="About__image" src={foto} alt="" />
        <p className="About__name">Raúl Santa Cruz Olivo</p>
        <p className="About__description">
          Make It Real student, I like programming and learn new things
        </p>
        <p className="About__description">
          In this program, I have learned:
          <ul>
            <li>Javascript</li>
            <li>Git workflow</li>
            <li>Flexbox</li>
          </ul>
        </p>
        <a
          className="About__email"
          href="mailto:raulsantacruz0@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          raulsantacruz0@gmail.com
        </a>
        <a
          className="About__github"
          href="https://github.com/raulsant20"
          target="_blank"
          rel="noreferrer"
        >
          Github: raulsant20
        </a>
      </section>
    </div>
  );
}
