import React from "react";
import './style.css';

function Portfolio() {
    return (
        <>
            <div id="portifolio" class="portifolio">

                <h2 class="titulos">Portifólio</h2>

                <div class="portifolio-proj">
                    <div class="area-port">
                        <div class="port-img">
                            <img src="./images/sorteador-capa.png" />
                        </div>

                        <div class="port-text-tittle">

                            <a href="./pages/sorteador/index.html" target="_blank"><h1>Sorteador</h1></a>
                            <p>Um site que sorteia quantos números o cliente quiser entre um intervalo de números que o cliente quiser.</p>

                        </div>

                    </div>
                    <div class="area-port">
                        <div class="port-img">
                            <img src="./images/print.jpg" />
                        </div>

                        <div class="port-text-tittle">

                            <a href="./pages/fsgames/index.html" target="_blank"><h1>Fs Games</h1></a>
                            <p>Site feito em sala de aula para treino.</p>

                        </div>
                    </div>
                </div>

            </div></>
    );
}

export default Portfolio;