import React from 'react'

import Search from '../assets/Search.svg'

function Footer() {
  return (
    <footer className='w-full h-full flex flex-col items-center gap-8'>
        <div className='w-[80%] h-80px flex flex-row gap-2 bg-zinc-800 rounded-lg mt-2'>
            <img src={Search} className='w-[40px] p-2'/>
            <input type='text' className='w-[250px] h-full bg-transparent' placeholder='Pesquise aqui'/>
        </div>

        <div className='w-[80%] h-[400px] bg-zinc-800 rounded-lg'>

        </div>

        <div className='w-[80%] h-[300px] bg-zinc-800 rounded-lg'>

        </div>
    </footer>
  )
}

export default Footer