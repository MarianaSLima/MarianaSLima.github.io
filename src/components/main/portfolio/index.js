import { DescArea, DescTexto, DescTitulo, PortContent, PortImg } from "./styled";

function Portfolio(props) {
    return (
        <PortContent>
            <PortImg src={props.imagem} alt={props.imagemAlt} />
            <DescArea>
                <DescTitulo  href={props.linkProjeto} target='_blank'>{props.nomeProjeto}</DescTitulo>
                <DescTexto>{props.descProjeto}</DescTexto>
            </DescArea>
        </PortContent>
    );
}

export default Portfolio;