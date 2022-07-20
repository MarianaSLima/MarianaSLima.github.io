import './style.css';
import React from 'react';

function Sobre() {
    return (
        <>
            <section id="sobre" class="sobre">
                <div class="sobre-esquerda">
                    <div class="area-img">

                        <img src="./images/perfil.png" alt="Minha foto" title="Mariana" />

                    </div>
                </div>
                <div class="sobre-direita">


                    <div class="area-text">
                        <div class="area-titulo">
                            <h1>Quem sou eu ?</h1>
                        </div>
                        <div class="texto-sobre">
                            <p>
                                Meu nome é Mariana dos Santos Lima, tenho 19 anos, atualmente estou fazendo
                                um curso de Desenvolvedor Full-Stack no Senac São Paulo.
                            </p>
                            <p>
                                Me formei no ensino médio em 2020, juntamente com um curso técnico em florestas
                                que eu cursava integralmente com o ensino médio, também concluí um curso de técnico em
                                Desenvolvimento de Sistemas no período de 2019-2020, resolvi fazer este curso para
                                aprimorar meus conhecimentos e aprender coisas novas.
                            </p>

                        </div>

                    </div>
                </div>


            </section>
        </>
    );
}

export default Sobre;