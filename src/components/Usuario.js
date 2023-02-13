import { useState } from "react"

export default function Usuario() {
    const [_nameAcount, set_nameAcount ] = useState("name")
    const [ _imageAcount, set_imageAcount ] = useState("assets/img/catanacomics.svg")

    function editName() {
        const _newName = prompt("Escreva seu novo nome !")

        if(_newName == ""){
            return
        }

        set_nameAcount(_newName)
    }
    
    function editImage() {
        const _newImage = prompt("Coloque um link da nova imagem !")

        if(_newImage == ""){
            return
        }

        set_imageAcount(_newImage)
    }

    return(
        <>
            <div className="usuario">
                <img data-test="profile-image" onClick={editImage} src={_imageAcount} alt="imagem de perfil"/>
                <div className="texto">
                    <span>
                        <strong data-test="name" >{_nameAcount}</strong>
                        <ion-icon data-test="edit-name" onClick={editName} name="pencil"></ion-icon>
                    </span>
                </div>
            </div>
        </>
    )
}