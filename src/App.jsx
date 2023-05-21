
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main'

import home from './assets/Home.svg'

function App() {

  return (
    <div className='h-full w-full'>
      <div className='h-full w-full flex flex-row  justify-center max-[500px]:flex-col-reverse'>
        <section className='w-[300px] h-full max-[1200px]:w-[60px] max-[750px]:ml-2 max-[500px]:ml-0 max-[500px]:w-full max-[500px]:h-[80px]'>
          <Header />
        </section>

        <Main /> 
        
        <section className='w-[400px] h-full max-[950px]:hidden'>
          <Footer />
        </section>
      </div>
    </div>
  )
}

export default App
