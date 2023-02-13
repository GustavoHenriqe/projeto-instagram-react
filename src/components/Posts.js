import { useState } from "react"

export default function Posts({_arrayOfStoriesAndPosters}) {

    function likeButton(element){
        console.log(element)
        
    }

    return (
        <>
            <div className="posts">
                {_arrayOfStoriesAndPosters.map(e => {
                    if (e.posters.has == true){

                        return (
                            <div data-test="post" key={e.posters.id} id={e.posters.id} className="post">
                                <div className="topo"> 
                                    <div className="usuario"> 
                                        <img src={e.image} alt={e.user} />
                                        <span>{e.user}</span>
                                    </div>
                                    <div className="acoes">
                                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                                    </div>
                                </div>

                                <div onClick={likeButton} className="conteudo"> 
                                    <img 
                                    data-test="post-image" src={e.posters.image} alt={e.posters.alt} 
                                    />
                                </div>

                                <div className="fundo"> 
                                    <div className="acoes">
                                        <div>
                                            <ion-icon 
                                            data-test="like-post"
                                            onClick={likeButton}
                                            name="heart"
                                            ></ion-icon>
                                            <ion-icon name="chatbubble-outline"></ion-icon>
                                            <ion-icon name="paper-plane-outline"></ion-icon>
                                        </div>
                                        <div>
                                            <ion-icon atributo data-test="save-post" name="bookmark-outline"></ion-icon>
                                        </div>
                                    </div>

                                    <div className="curtidas">
                                        <img src="assets/img/adorable_animals.svg" alt="adorable_animals"/>
                                        <div className="texto">
                                            <span>
                                                Curtido por <strong>adorable_animals</strong> e <strong>outras <span data-test="likes-number">{e.posters.view}</span> pessoas</strong>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }else {
                        return null
                    }
                })}
            </div>
        </>
    )
} 