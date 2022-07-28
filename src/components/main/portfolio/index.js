import "./style.css";

function Portfolio(props) {
    return (
            <div className="port-content">
                <img src={props.imagem} alt={props.imagemAlt} />
                <div className="desc-area">
                    <h1 className="desc-titulo">{props.nomeProjeto}</h1>
                    <a className="desc-texto" href={props.linkProjeto} target='_blank'>acessar</a>
                </div>
            </div>

    );
}

export default Portfolio;