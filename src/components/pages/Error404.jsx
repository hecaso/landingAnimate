import { Link } from "react-router-dom";

export const Error404 = () => {
    return (
        <div className="flex flex-col pt-50 px-20">
            <Link to="*" className="py-1 px-3 text-lg font-semibold text-amber-600 hover:text-sky-400 rounded-2xl hover:bg-slate-700 transition duration-300 uppercase">
                <h1>
                    Error 404
                </h1>

                <div  >
                    <h1 className="text-4xl font-bold text-amber-600">Contacto</h1>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste odit assumenda aut laudantium maxime, sint expedita quod aliquid distinctio voluptatum suscipit quasi dignissimos adipisci doloremque temporibus omnis nobis, aliquam ducimus.</p>
                </div>
            </Link>
        </div>
    )
}
