import { DescArea, DescTexto, DescTitulo, PortContent, PortImg } from "./styled";

function Portfolio(props) {
    return (
        <PortContent>
            <PortImg />
            <DescArea>
                <DescTitulo></DescTitulo>
                <DescTexto></DescTexto>
            </DescArea>
        </PortContent>
    );
}

export default Portfolio;