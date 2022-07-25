import "./style.css";

function Portfolio(props) {
    return (
        <div className="port-content">
            <img className="port-image" src={props.imagem} alt={props.imagemAlt} />
            <div className="desc-area">
                <div className="desc-titulo" href={props.linkProjeto} target='_blank'>{props.nomeProjeto}</div>
                <div className="desc-texto">{props.descProjeto}</div>
            </div>
        </div>
    );
}

export default Portfolio;