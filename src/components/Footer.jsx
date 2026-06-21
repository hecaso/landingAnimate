import { Link } from "react-router-dom";
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";
import { PiTiktokLogoThin } from "react-icons/pi";
import { FaRegFutbol } from "react-icons/fa";
import { SiFifa } from "react-icons/si";

export const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center w-full py-20 bg-linear-to-b from-[#5524B7] to-[#380B60] text-white/70 ">
            <Link to="/">
                <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                    <FaRegFutbol className="text-5xl text-amber-600 ml-3 animate-bounce" />
                    <p className="animate-pulse">Futboleros</p>
                    <p className="text-amber-600 animate-pulse">Killa</p>
                </div>
            </Link>
            <div className="flex gap-4 p-2 border mt-4 rounded-2xl">
                <CiFacebook className="font-semibold text-3xl" />
                <CiInstagram className="font-semibold text-3xl" />
                <CiYoutube className="font-semibold text-3xl" />
                <PiTiktokLogoThin className="font-semibold text-3xl" />
            </div>

            <div className="grid grid-cols-3 justify-center items-center md:grid-cols-1 md:container md:flex md:justify-center md:mt-6 gap-4 pt-4 " >
                <a className="text-4xl" href="https://www.fifa.com/es/home"><SiFifa /></a>
                <a className="text-xl" href="https://www.conmebol.com/"> <img className="w-30" src="https://cdn.conmebol.com/wp-content/uploads/2021/08/COMPOSIT-PARA-WEB-CONMEBOL-CREE-EN-GRANDE-1-2048x616.png" alt="" /></a>
                <a className="text-xl" href="https://dimayor.com.co/"> <img className="w-25" src="https://dimayor.com.co/wp-content/uploads/2024/04/Logo-Dimayor.png" alt="" /> </a>
                <a className="text-xl" href="https://www.conmebol.com/"><img className="w-15" src="https://difutbol.org/wp-content/uploads/2022/08/dif.jpg" alt="" /></a>
                <a className="text-xl" href="https://ligadefutboldelatlantico.com/"><img className="w-12" src="https://ligadefutboldelatlantico.com/wp-content/uploads/2024/03/cropped-LOGO-LFA.png" alt="" /></a>
                <a className="text-xl" href="/"><img className="w-12" src={<ng />} alt="" /></a>

            </div>
            <p className="mt-8 text-center" >Copyright 2026. Todos los derechos reservados.</p>
        </footer>
    )
}
