import { data } from "../data/data";
import { FaRegFutbol  } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { ResponsiveMenu } from "./ResponsiveMenu";
import { Link } from "react-router-dom";


export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="fixed w-full h-25 flex justify-between items-center bg-linear-to-b from-[#5524B7] to-[#380B60] text-white/70 " >
                <div className="container flex justify-between items-center py-8 fixed">
                    {/*Logo Section */}
                    <Link to="/">
                        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                            <FaRegFutbol className="text-5xl text-amber-600 ml-3" />
                            <p>Futboleros</p>
                            <p className="text-amber-600">Killa</p>
                        </div>
                    </Link>

                    {/*menu section*/}
                    <div className="hidden md:block gap-5 text-amber-600" >
                        <Link to="/" className="py-1 px-3 text-lg font-semibold text-amber-600 hover:text-sky-400 rounded-2xl hover:bg-slate-700 transition duration-300 uppercase">
                            Inicio
                        </Link>

                        <Link to="Nosotros" className="py-1 px-3 text-lg text-amber-600 hover:text-sky-400 rounded-2xl hover:bg-slate-700 transition duration-300 uppercase font-semibold">
                            Nosotros
                        </Link>

                        <Link to="Torneos" className="py-1 px-3 text-lg text-amber-600 hover:text-sky-400 rounded-2xl hover:bg-slate-700 transition duration-300 uppercase font-semibold">
                            Torneos
                        </Link>
                      

                        <Link to="Contacto" className="py-1 px-3 text-lg text-amber-600 hover:text-sky-400 rounded-2xl hover:bg-slate-700 transition duration-300 uppercase font-semibold">
                            Contacto
                        </Link>

                        


                    </div>

                    {/*Menu Hamburguesa*/}
                    <div className="md:hidden">
                        <MdMenu onClick={() => setOpen(!open)} className="text-4xl text-amber-600" />
                    </div>

                </div>

            </nav>
            <ResponsiveMenu open={open} data={data} />
        </>
    )
}
