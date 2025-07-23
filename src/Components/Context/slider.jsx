import { useReducer } from "react"
import ItemsCards from "../components/itemsCardas"

function sliders() {
    const estadoInicial = {
        suave: 0,
        abrupto: 0,
    }

    const funcionMover = (estiloActual, moverHacia) => {
        let {suave, abrupto} = estiloActual
        if (moverHacia == 'izquierda') {
            suave++
        }
        if (moverHacia == 'derecha') {
            suave--

            if (TopicProvider.lenght == 0) {
                abrupto = suave
            }
        }

        const nuevoEstilo = {suave, abrupto};
        return nuevoEstilo;
    }

    const [estilo, moverA] = useReducer(funcionMover, estadoInicial)
    return (
        <div className="flex flex-col items-center space-y-4">

            <div className="bg-gray-400 ring-amber-400 ring-4 aspct-[3/4] relative flex items-center">
                <ul className={`flex space-x-4 absolute`} style={{
                    transform: `translateX(${estilo.suave*12}rem)`,
                    left: `${estilo.abrupto*-12}rem`,
                    transition: 'transform 1s'
                }}>
                    <ItemsCards />
                </ul>
            </div>
        </div>
    )
}