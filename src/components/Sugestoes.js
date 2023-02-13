export default function Sugestoes() {
    const _sugestionSideBar = [{
        image: "assets/img/bad.vibes.memes.svg",
        name: "bad.vibes.memes",
        razon: "Segue você"

    }, {
        image: "assets/img/chibirdart.svg",
        name: "chibirdart",
        razon: "Segue você"

    }, {
        image: "assets/img/razoesparaacreditar.svg",
        name: "razoesparaacreditar",
        razon: "Novo no Instagram"

    }, {
        image: "assets/img/adorable_animals.svg",
        name: "adorable_animals",
        razon: "Segue você"

    }, {
        image: "assets/img/smallcutecats.svg",
        name: "smallcutecats",
        razon: "Segue você"
    }]


    return (
        <>
            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>
                        Ver tudo
                    </div>
                </div>
                {_sugestionSideBar.map(e => {
                    return (
                        <div key={e.name} className="sugestao">
                            <div className="usuario">
                                <img src={e.image} alt={e.name}/>
                                <div className="texto">
                                    <div className="nome">{e.name}</div>
                                    <div className="razao">{e.razon}</div>
                                </div>
                            </div>
                            <div className="seguir">Seguir</div>
                        </div>
                    )
                })}
                <div className="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                    Hashtags • Idioma
                </div>
                <div className="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </>
    )
}