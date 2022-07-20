import './style.css';
import React from 'react';

function Footer() {
    return (
        <>
            <footer id="footer" class="contato">
                <div class="footer-area1">
                    <ul>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#portifolio">Portifólio</a></li>
                        <li><a href="#habilidades">Habilidades</a></li>
                        <li><a href="#contato">Contato</a></li>

                    </ul>
                </div>
                <div class="footer-area2">
                    <div class="sobre-texto">
                        <p>Técnico em Desenvolvimento de Sistemas</p>
                        <p>Desenvolvedor Full-Stacks</p>
                    </div>
                </div>
                <div class="footer-area3">
                    <div class="info-contato">
                        <div class="email">E-mail: mariana.lima162@hotmail.com</div>
                        <div class="endereco">Endereço: rua Gustavo Henn, 33</div>
                        <div class="telefone">Fone: (18) 99693-3357</div>
                    </div>

                </div>
                <div class="rede-social">
                    <a href="https://www.instagram.com/mari_lima162/" target="_blank"><i class="fa fa-instagram"></i></a>
                    <a href="https://github.com/MarianaSLima" target="_blank"><i class="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/mariana-dos-santos-lima-aa78921b9/" target="_blank"><i
                        class="fa fa-linkedin"></i></a>
                </div>
            </footer>
        </>
    );
}

export default Footer;