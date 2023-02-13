import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"

export default function SideBar() {
    return (
        <>
            <div className="sidebar">
                <Usuario />
                <Sugestoes />
            </div>
        </>
    )
}