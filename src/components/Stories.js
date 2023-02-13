export default function Stories(props) {
    const { _arrayOfStoriesAndPosters } = props

    return (
        <>
            <div className="stories">
                {_arrayOfStoriesAndPosters.map(e => {
                    return <div key={e.user} className="story"> 
                        <div className="imagem"> 
                            <img src={e.image} alt={e.user} />
                        </div>
                        <div className="usuario"> 
                            {e.user}
                        </div>
                    </div>
                })}
                <div className="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
        </>
    )
}