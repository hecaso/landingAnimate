import { createContext, useContext, useState } from "react";
import datos from "../../data/info";

const TopicContext = createContext();

const topics = datos.topics.gameEngines;

function TopicProvider({ children }) {

    const [currentTopic, setCurrentTopic] = useState(0);
    const [disableButton, setDisableButton] = useState(false);
    const [backgroundAnimate, setBackgrounAnimate] = useState("");

    const nextTopic = () => {
        setDisableButton(true);
        setBackgrounAnimate("animate-downgrade");

        setTimeout(() => {
            if (currentTopic >= topics.length - 1) {
                return setCurrentTopic(0);
            } else {
                setCurrentTopic(currentTopic + 1);
            }
            setTimeout(() => {
                setBackgrounAnimate("")
                setDisableButton(false);
            }, 100);
        }, 700);
    }

    const prevTopic = () => {
        setDisableButton(true);
        setBackgrounAnimate("animate-upgrade")

        if (currentTopic == 0) {
            return setCurrentTopic(topics.length - 1);
        } else {
            setCurrentTopic(currentTopic - 1);
        }
        setTimeout(() => {
            setBackgrounAnimate("")
            setDisableButton(false);
        }, 900);
    };

    return (
        <TopicContext.Provider value={{ currentTopic, nextTopic, prevTopic, topics, backgroundAnimate }}>
            {/* div para los botones */}
            <div className='flex z-20 w-full justify-center bottom-10 fixed space-x-10'>
                <button type='button ' onClick={prevTopic} className='ring-.25 ring-white hover:scale-105 transition-transform rounded-full size-10 justify-center items-center'>
                    <img src="/landingAnimate/icons/arrow-left-circle.svg" className='size-10' alt="left arrow" />
                </button>
                <button type='button' onClick={nextTopic} className='ring-.25 ring-white hover:scale-105 transition-transform rounded-full size-10 justify-center items-center'>
                    <img src="/landingAnimate/icons/arrow-right-circle.svg" className='size-10' alt="right arrow" />
                </button>
            </div>
            {children}
        </TopicContext.Provider>
    );
}

export function useTopic() {
    const context = useContext(TopicContext);
    if (!context) {
        throw new Error("para usar useTopic, debe estar dentro de TopicProvider");
    }
    return context;
}
export default TopicProvider