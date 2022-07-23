import styled from "styled-components";
import { keyframes } from "styled-components";



const BarraAnimation = keyframes`
    0% { width: 0%; }
        
    100% { width: ${props => props.porc}}
  }
`;

export const ConteudoHab = styled.div`  
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px rgba(155, 155, 155, 0.6);
    margin: 20px;
    border-radius: 7px;
    padding-left: 10px;
    padding-right: 10px;
    width: 510px;
    background-color: #fff;
`;

export const HabEsquerda = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-right: 5px;
`;

export const HabDireita = styled.div`
    flex: 1;
    display: flex;
    justify-content: start;
    align-items: center;
`;

export const AreaProgBarra = styled.div`
    display: flex;
    width: 400px;
    height: 18px;
    background-color: rgb(230, 230, 230);
    position: relative;
    border-radius: 10px;

`;

export const ProgBarra = styled.div`
    position: absolute;
    height: 100%;
    background-color: #000000;
    border-radius: 10px;
    text-align: end;
    width: ${props => props.porc};
    
    animation: ${BarraAnimation} 4s;
`;

export const PorcBarra = styled.p`
    padding-left: 5px;
    padding-right: 3px;
    position: absolute;
    color: rgb(255, 255, 255);
    width: 100%;
`;
