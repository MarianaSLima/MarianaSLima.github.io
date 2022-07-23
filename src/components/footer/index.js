import './style.css';
import React from 'react';
import {FooterArea4, LinkRedes} from './styled';

function Footer(props) {
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
                <FooterArea4>
                    <LinkRedes href={props.instagram} target="_blank"><i class="fa-brands fa-instagram fa-2x"/></LinkRedes>
                    <LinkRedes href={props.gitHub} target="_blank"><i class="fa-brands fa-github fa-2x"/></LinkRedes>
                    <LinkRedes href={props.linkedIn} target="_blank"><i class="fa-brands fa-linkedin-in fa-2x"/></LinkRedes>
                    <LinkRedes href={props.twitter} target="_blank"><i class="fa-brands fa-twitter fa-2x"/></LinkRedes>
                </FooterArea4>
            </footer>
        </>
    );
}

export default Footer;