import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

export const ResponsiveMenu = ({ open, data }) => {

    const animation = {
        initial: {opacity: 0, y: -100},
        animate: {opacity: 1, y: 0},
        exit: {opacity: 0, y: -100},
        transition: {duration: 0.3},
    }
    return (
        <AnimatePresence mode="await">
            {open && (
                <motion.div {...animation} className="absolute top-20 left-0 w-full h-screen z-30">
                    <div className="fixed w-[90%] flex flex-col justify-center items-center text-xl font-semibold uppercase bg-amber-200 text-white py-6 m-6 rounded-3xl md:hidden">

                        <NavLink to="/" activeClassName="active" className="py-1 px-3 text-lg font-semibold text-amber-600 hover:text-amber-600 hover:font-semibold hover:w-full hover:text-center  hover:bg-white transition duration-300">
                            Inicio
                        </NavLink>

                        <NavLink to="Nosotros" activeClassName="active" className="py-1 px-3 text-lg font-semibold text-amber-600 hover:text-amber-600 hover:font-semibold hover:w-full hover:text-center  hover:bg-white transition duration-300">
                            Nosotros
                        </NavLink>

                        <NavLink to="Torneos" activeClassName="active" activeClassName="active" className="py-1 px-3 text-lg font-semibold text-amber-600 hover:text-amber-600 hover:font-semibold hover:w-full hover:text-center  hover:bg-white transition duration-300">
                            Torneos
                        </NavLink>
                        
                        <NavLink to="Contacto" activeClassName="active" activeClassName="active" className="py-1 px-3 text-lg font-semibold text-amber-600 hover:text-amber-600 hover:font-semibold hover:w-full hover:text-center  hover:bg-white transition duration-300">
                            Contacto
                        </NavLink>


                    </div>
                </motion.div>
            )}

        </AnimatePresence>
    )
}
