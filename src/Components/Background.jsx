import { useTopic } from './Context/TopicContext'

function Background() {
    const {topics, currentTopic, backgroundAnimate} = useTopic();

  return (
    // div principal
    <div className={`flex flex-col justify-center w-screen h-screen ${backgroundAnimate}`}>
        {/* div para el fondo */}
        <div className='flex fixed left-0 right-0 top-0 bottom-0 select-none '>
            <img className='size-full object-cover -z-50' src={topics[currentTopic].background} alt="background" />
            <div className='absolute flex size-full bg-gradient-to-b from-black/100 via-transparent to-transparent'></div>
        </div>
        {/* {div para la descripcion} */}
        <div className='flex z-10 fixed left-28 flex-col item-center justify-center w-1/2 h-screen'>
            <img src={topics[currentTopic].logo} className='size-40' alt="Logo" />
            <p className='bg-clip-text text-transparent bg-gradient-to-r from-black to-white font-bold text-3xl '>{topics[currentTopic].name}</p>
            <p className='text-black font-bold text-1xl'>{topics[currentTopic].description}</p>
        </div>



    </div>
  )
}

export default Background
