import './style.css';
import React from 'react';

function Header() {
    return (
        <>
            <header>

                <div class="header-content">
                    <div class="logo">
                        <h1>Mariana Lima</h1>
                    </div>

                    <div class="navegation">

                        <ul>

                            <a href="#sobre">Sobre</a>
                            <a href="#portifolio">Portifólio</a>
                            <a href="#habilidades">Habilidades</a>
                            <a href="#footer">Contato</a>

                        </ul>

                    </div>
                </div>
                <div class="bar-header">

                </div>
            </header>
        </>
    );
}

export default Header;