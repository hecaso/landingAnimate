import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

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
                    <div className=" flex flex-col justify-center items-center text-xl font-semibold uppercase bg-amber-200 text-white py-6 m-6 rounded-3xl md:hidden">

                        <Link to="/" className="py-1 px-3 text-lg font-semibold text-amber-600 hover:text-amber-600 hover:font-semibold hover:w-full hover:text-center  hover:bg-white transition duration-300">
                            Inicio
                        </Link>

                        <Link to="Nosotros" className="py-1 px-3 text-lg font-semibold text-amber-600 hover:text-amber-600 hover:font-semibold hover:w-full hover:text-center  hover:bg-white transition duration-300">
                            Nosotros
                        </Link>

                        <Link to="Torneos" className="py-1 px-3 text-lg font-semibold text-amber-600 hover:text-amber-600 hover:font-semibold hover:w-full hover:text-center  hover:bg-white transition duration-300">
                            Torneos
                        </Link>
                        
                        <Link to="Contacto" className="py-1 px-3 text-lg font-semibold text-amber-600 hover:text-amber-600 hover:font-semibold hover:w-full hover:text-center  hover:bg-white transition duration-300">
                            Contacto
                        </Link>


                    </div>
                </motion.div>
            )}

        </AnimatePresence>
    )
}
