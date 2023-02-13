import { useState } from "react"

export default function Posts({_arrayOfStoriesAndPosters}) {

    const [ _perfilWithPoster, set_arrayOfStoriesAndPosters ] = useState(_arrayOfStoriesAndPosters.filter(e => {
        if(e.posters.has == true){
            return e
        }
    }))

    function likeButton(element) {
        const _arrayLikeButton = _perfilWithPoster.map(e => {
            const _editLike = e

            if (e.posters.id == element.target.id){
                if(e.posters.like.button == false){
                    _editLike.posters.like.button = true
                    _editLike.posters.view += 1
                    _editLike.posters.like.type = "heart"

                    return _editLike

                }else if (e.posters.like.button == true){

                    if(element.target.classList[0] == "noDeslike"){
                        return _editLike

                    }else{
                        _editLike.posters.like.button = false
                        _editLike.posters.view -= 1
                        _editLike.posters.like.type = "heart-outline"

                        return _editLike
                    }
                }

            }else{
                return e
            }
        })

        set_arrayOfStoriesAndPosters(_arrayLikeButton)
    }

    function bookmarkButton(element) {
        const _arrayBookmarkButton = _perfilWithPoster.map(e => {
            const _editBookMark = e

            if (e.posters.id == element.target.id){
                if( e.posters.bookmark.button == false){
                    _editBookMark.posters.bookmark.type = "bookmark"
                    _editBookMark.posters.bookmark.button = true

                    return _editBookMark
                }else if(e.posters.bookmark.button == true){
                    _editBookMark.posters.bookmark.type = "bookmark-outline"
                    _editBookMark.posters.bookmark.button = false

                    return _editBookMark
                }
            }else {
                return e
            }
        })
    
        set_arrayOfStoriesAndPosters(_arrayBookmarkButton)
    }

    return (
        <>
            <div className="posts">
                {_perfilWithPoster.map(e => {
                    if (e.posters.has == true){
                
                        return (
                            <div data-test="post" key={e.posters.id} className="post">

                                <div className="topo"> 
                                    <div className="usuario"> 
                                        <img src={e.image} alt={e.user} />
                                        <span>{e.user}</span>
                                    </div>
                                    <div className="acoes">
                                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                                    </div>
                                </div>

                                <div  className="conteudo"> 
                                    <img
                                    onClick={likeButton}
                                    className="noDeslike"
                                    id={e.posters.id}
                                    data-test="post-image" src={e.posters.image} alt={e.posters.alt} 
                                    />
                                </div>

                                <div className="fundo"> 
                                    <div className="acoes">
                                        <div>
                                            <ion-icon
                                            data-test="like-post"
                                            onClick={likeButton}
                                            style={{
                                                color: e.posters.like.button? "red": ""
                                            }}
                                            id={e.posters.id}
                                            name={e.posters.like.type}

                                            ></ion-icon>
                                            <ion-icon name="chatbubble-outline"></ion-icon>
                                            <ion-icon name="paper-plane-outline"></ion-icon>
                                        </div>
                                        <div>
                                            <ion-icon
                                             data-test="save-post"
                                             onClick={bookmarkButton}
                                             id={e.posters.id}
                                             style={{
                                                color: e.posters.bookmark.button? "blue": ""
                                             }} 
                                             name={e.posters.bookmark.type}></ion-icon>
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