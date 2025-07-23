import { useReducer } from 'react';
import { useTopic } from '../Context/TopicContext'

const Card = ({ topic }) => {
    return (
        <li className="hover:scale-105 transition-transform rounded-xl overflow-hidden shadow-xl" style={{ backgroundImage: `url(${topic.background})`, backgroundPosition: "center", backgroundSize: "cover" }} >
            <div className='bg-gradient-to-b from-transparent to-black text-white w-40 aspect-[3/4] flex-col-reverse text-center justify-between p-2'>
                <span className='font-bold'>{topic.name}</span>
            </div>
        </li>
    )
}

function Cards() {
    const { topics, estilo } = useTopic();

    return (
        // div principal
        <div className='fixed z-10 top-0 left-[50%] w-screen max-w-[36rem] h-screen flex items-center overflow-hidden'>
            {/*contenedor animable */}
            <div></div>
            <ul className='flex space-x-8 relative' style={{
                // 10rem de ancho (w-40)
                // 2rem de separacion entre ellos (space-x-8)
                transform: `translateX(${estilo.suave*12}rem)`,
                left: `${estilo.abrupto*-12}rem`,
                transition: "transform 1s"
            }}>
                {topics.map((topics, index) => {
                    return (
                        <Card key={index} topic={topics} />
                    );
                })}
                {topics.map((topics, index) => {
                    if(index < 3) {
                        return (
                            <Card key={index} topic={topics} />
                        );

                    }
                })}
            </ul>
        </div>
    )
}

export default Cards