import Background from './Components/Background';
import TopicProvider from './Components/Context/TopicContext';
import Header from './Components/Header';
import Cards from './Components/Context/Cards';

function App() {
  return (
    <div className='bg-black'>
      <Header/>
      <main className='overflow-hidden' >
        <TopicProvider>
          <Background/>
          <Cards/>
        </TopicProvider>
      </main>
    </div>
  )
}

export default App