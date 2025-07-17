import {useTopic} from '../Context/TopicContext'

const Card = ({topic}) => {
    return(
        <li className="hover:scale-105 transition-transform rounded-xl overflow-hidden shadow-xl" style={{backgroundImage: `url(${topic.background})`, backgroundPosition: "center", backgroundSize: "cover"}} >
            <div className='bg-gradient-to-b from-transparent to-black text-white w-40 aspect-[3/4] flex-col-reverse text-center justify-between p-2'>
                <span className='font-bold'>{topic.name}</span>
            </div>
        </li>
    )
}

function Cards() {
    const {topics} = useTopic();

  return (
    // div principal
    <div className='fixed z-10 top-0 left-0 w-screen h-screen flex items-center'>
        {/*contenedor animable */}
        <div></div>
        <ul>
            {topics.map((topics,index)=> {
                return (
                    <Card key={index} topic={topics} />
                );
            })}
        </ul>
    </div>
  )
}

export default Cards