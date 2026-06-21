import { data } from "../data/data";
import { FaRegFutbol } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { ResponsiveMenu } from "./ResponsiveMenu";
import { Link, NavLink } from "react-router-dom";


export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="fixed w-full h-25 flex justify-between items-center bg-linear-to-b from-[#5524B7] to-[#380B60] text-white/70 " >
                <div className="container flex justify-between items-center py-8 fixed">
                    {/*Logo Section */}
                    <Link to="/">
                        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                            <FaRegFutbol className="text-5xl text-amber-600 ml-3 animate-spin " />
                            <p className="animate-bounce">Futboleros</p>
                            <p className="text-amber-600 animate-bounce">Killa</p>
                        </div>
                    </Link>

                    {/*menu section*/}
                    <ul className=" md:flex md:justify-center md:items-center hidden  gap-5 text-amber-600" >
                        <li>
                            <NavLink to="/" activeClassName="active" className="py-1 px-3 text-lg font-semibold text-amber-600 hover:text-sky-400 rounded-2xl hover:bg-slate-700 transition duration-300 uppercase">
                                Inicio
                            </NavLink>

                        </li>

                        <li>
                            <NavLink to="Nosotros" activeClassName="active" className="py-1 px-3 text-lg text-amber-600 hover:text-sky-400 rounded-2xl hover:bg-slate-700 transition duration-300 uppercase font-semibold">
                                Nosotros
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="Torneos" activeClassName="active" className="py-1 px-3 text-lg text-amber-600 hover:text-sky-400 rounded-2xl hover:bg-slate-700 transition duration-300 uppercase font-semibold">
                                Torneos
                            </NavLink>
                            <li>
                                <Link to="cevillar" className=" py-1 px-3 text-lg text-amber-600 hover:text-sky-400 hover:visible rounded-2xl hover:bg-slate-700 transition duration-300 uppercase font-semibold">
                                    Cevillar
                                </Link>

                            </li>
                        </li>

                        <li>
                            <NavLink to="Contacto" activeClassName="active" className="py-1 px-3 text-lg text-amber-600 hover:text-sky-400 rounded-2xl hover:bg-slate-700 transition duration-300 uppercase font-semibold">
                                Contacto
                            </NavLink>
                        </li>




                    </ul>

                    {/*Menu Hamburguesa*/}
                    <div className="md:hidden">
                        <MdMenu onClick={() => setOpen(!open)} className="text-4xl text-amber-600" />
                    </div>

                </div>


            </nav>
            <div className=" fixed w-full h-15 bg-amber-600 text-white flex items-center justify-center gap-2 mt-25 bg-linear-to-b from-[#5524B7] to-[#380B60] ">
                <span className="w-[30%] m-auto p-4 " >Noticias de última hora</span>
                <marquee behavior="scroll" direction="left"> Comunicado: Reunión de delegados martes 23 de junio 19:00 horas</marquee>
            </div>
            <ResponsiveMenu open={open} data={data} />
        </>
    )
}
