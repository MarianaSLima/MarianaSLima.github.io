import Sobre from './sobre/index';
import Portfolio from './portfolio/index';
import Habilidades from './habilidades/index';
import React from 'react';
import './style.css';

function Main(props) {
  return (
    <main>

      <Sobre />

      <section id="portifolio" class="portifolio">
        <h2 class="titulos">Portifólio</h2>
        <div className='port-grid'>
          <Portfolio />
          <Portfolio />
          <Portfolio />
          <Portfolio />
          <Portfolio />
          <Portfolio />
          <Portfolio />
          <Portfolio />
          <Portfolio />
        </div>
      </section>

      <section id="habilidades" class="habilidades">
        <h2 class="titulos">Habilidades</h2>
        <div class="hab-area">
          <Habilidades porc={props.html} icon="fa-brands fa-html5 fa-4x" corIcon="d75413" />
          <Habilidades porc={props.css} icon="fa-brands fa-css3-alt fa-4x" corIcon="3652f1" />
          <Habilidades porc={props.java} icon="fa-brands fa-js-square fa-4x" corIcon="eead1d" />
          <Habilidades porc={props.node} icon="fa-brands fa-node-js fa-4x" corIcon="008000" />
          <Habilidades porc={props.react} icon="fa-brands fa-react fa-4x" corIcon="5D0CE8" />
          <Habilidades porc={props.mysql} icon="fa-solid fa-database fa-4x" corIcon="054f77" />
        </div>
      </section>

    </main>
  );
}

export default Main;
