import { section } from "framer-motion/client"
import { Link } from "react-router-dom"

export const Inicio = () => {
    return (
        <main className=" bg-amber-600">
            <section className="bg-amber-600 backdrop:blur flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex flex-wrap items-center justify-center mt-15 gap-4 p-1.5 rounded-full border border-white text-white text-xs">
                        <div className="flex items-center ">
                            <img className="size-7 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="userImage1" />
                            <img className="size-7 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="userImage2" />
                            <img className="size-7 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop" alt="userImage3" />
                        </div>

                        <p className="-translate-x-2">Nuestros Asociados.</p>
                    </div>


                    <h1 className="text-center md:text-left text-5xl leading-14 md:text-6xl md:leading-15 font-medium max-w-xl text-white">
                        Torneos del fútbol aficionado de la ciudad de Barranquilla.
                    </h1>

                    <p className="text-center md:text-left text-sm text-white max-w-lg mt-2">
                        Llevamos las esttadísticas de los torneos amateures y recreativos de la ciudad de Barranquilla.
                    </p>
                    <div className="flex items-center gap-4 mt-8 text-sm">
                        <Link to="/Torneos">
                            <button className="bg-amber-500 hover:bg-amber-400 text-white active:scale-95 rounded-md px-7 h-11">
                                Ir a Torneos
                            </button >
                        </Link>

                        <button className="flex items-center gap-2 border border-white active:scale-95 hover:bg-white/10 transition text-white rounded-md px-6 h-11">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video-icon lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" /><rect x="2" y="6" width="14" height="12" rx="2" /></svg>
                            <span>Video demo</span>

                        </button>
                    </div>
                </div>
                <div className="md:mt20">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSaWq3nXYVz2hnwYXqea7P8_TMTmtkhE1jV5AkSQmkog&s=10" alt="hero" class=" shadow-3xl rounded-3xl border border-white max-w-xs sm:max-w-sm lg:max-w-md transition-all duration-300 md:mt-20"></img>

                </div>
            </section>
        </main>
    )
}
