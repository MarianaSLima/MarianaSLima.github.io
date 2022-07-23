import * as CPS from './styled';
import React from 'react';

function Habilidades(props) {
    return (
        <>
            <CPS.ConteudoHab>
                <CPS.HabEsquerda>
                    <i style={{ color: `#${props.corIcon}` }} className={props.icon} />
                </CPS.HabEsquerda>
                <CPS.HabDireita>
                    <CPS.AreaProgBarra>
                        <CPS.ProgBarra porc={props.porc} >
                            <CPS.PorcBarra porc={props.porc} > {props.porc}</CPS.PorcBarra>
                        </CPS.ProgBarra>
                    </CPS.AreaProgBarra>
                </CPS.HabDireita>
            </CPS.ConteudoHab>

        </>
    );
}

export default Habilidades;