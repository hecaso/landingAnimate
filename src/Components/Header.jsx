import { useState } from "react";
import datos from "../Data/info.js";

const Enlace = ({ children, to, hookMenu }) => {
    return (
        <li className={`transition-transform duration-400 ${hookMenu ? "max-xs:translate-x-0": "max-xs:translate-x-full"} ${hookMenu? "delay-300":"delay-0"}`}>
            <a href={to} className="flex items-center px-2 h-10 text-white hover:rounded-2xl hover:text-black transition-colors max-xs:hover:text-black max-xs:px-8">{children}</a>
        </li>
    );
};

function Header() {

    const [menu, setMenu] = useState(false);
    return (
        <header className={`flex items-start justify-around fixed w-full ${menu?"max-xs:h-screen":"max-xs:h-auto"}`}>
            <a href="#" className="flex space-x-4 items-center p-1">
                <img className="rounded-full my-2 w-20 hover:scale-105 shadow-2xl shadow-black" src={datos.header.logo} alt="Logo" />
                <h1 className="animate-bounce font-bold text-2xl font-mono text-white hover:text-blue-800 hover:scale-105">{datos.header.name}</h1>
            </a>

            <nav className={`flex flex-col items-end max-xs:bg-black/70 ${menu?"max-xs:h-screen":"max-xs:h-0"}`}>
                <img className="z-20 hidden max-xs:block w-9 invert p-1 hover:bg-black/20 transition-colors" src="/landingAnimate/images/engines/list.svg" alt="menu" onClick={()=>setMenu(!menu)
                } />
                <ul className="flex max-xs:flex-col">

                    {datos.header.nav.map((enlace, posicion) => {
                        return <Enlace hookMenu={menu} to={enlace.link} key={posicion}>{enlace.name} </Enlace>
                    })}
                </ul>
            </nav>

        </header>
    )
}

export default Header