import { useState } from "react"

import Stories from "./Stories"
import Posts from "./Posts"
import SideBar from "./SideBar"

export default function Main() {
    const [ _arrayOfStoriesAndPosters, set_arrayOfStoriesAndPosters ] = useState([{
            image: "assets/img/9gag.svg",
            user: "9gag",
            posters: {
                id: 1,
                has: false,
                image: null,
                alt: null,
                view: null
            }
        },
        {
            image: "assets/img/meowed.svg",
            user: "meowed",
            posters: {
                id: 2,
                has: true,
                image: "assets/img/gato-telefone.svg",
                alt: "gato-telefone",
                view: 233454
            }
        },
        {
            image: "assets/img/barked.svg",
            user: "barked",
            posters: {
                id: 3,
                has: true,
                image: "assets/img/dog.svg",
                alt: "dog",
                view: 102392
            }
        },
        {
            image: "assets/img/nathanwpylestrangeplanet.svg",
            user: "nathanwpylestrangeplanet",
            posters: {
                id: 4,
                has: false,
                image: null,
                alt: null,
                view: null
            }
        },
        {
            image: "assets/img/wawawicomics.svg",
            user: "wawawicomics",
            posters: {
                id: 5,
                has: false,
                image: null,
                alt: null,
                view: null
            }
        },
        {
            image: "assets/img/respondeai.svg",
            user: "respondeai",
            posters: {
                id: 6,
                has: false,
                image: null,
                alt: null,
                view: null
            }
        },
        {
            image: "assets/img/filomoderna.svg",
            user: "filomoderna",
            posters: {
                id: 7,
                has: false,
                image: null,
                alt: null,
                view: null
            }
        },
        {
            image: "assets/img/memeriagourmet.svg",
            user: "memeriagourmet",
            posters: {
                id: 8,
                has: false,
                image: null,
                alt: null,
                view: null
            }
        }
    ])

    return (
        <>
        <div className="corpo">
            <div className="esquerda">
                <Stories _arrayOfStoriesAndPosters={_arrayOfStoriesAndPosters} />
                <Posts _arrayOfStoriesAndPosters={_arrayOfStoriesAndPosters} />
            </div>
            <SideBar />
        </div>
        </>
    )
}