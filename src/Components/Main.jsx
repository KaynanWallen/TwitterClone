import React from 'react'

import Menu from '../assets/menu.png'
import Comment from '../assets/Comment.svg'
import Retweet from '../assets/Retweet.svg'
import Like from '../assets/Like.svg'

function Main() {
  return (
    <main className='w-[600px] h-[full] border border-b-0 border-zinc-700 flex flex-col items-center max-[500px]:w-full max-[500px]:h-full '>
        <div className='w-full h-[100px] border-b border-zinc-700 flex flex-col justify-between'>
          <p className='font-bold text-2xl p-2'>
            Home
          </p>
          <div className='w-full h-[20px] flex flex-row justify-evenly mb-4'>
            <p className='w-[auto] font-bold pb-8 border-blue-500 rounded-sm border-b-4 cursor-pointer '>For you</p>
            <p className='w-[auto] pb-8 border-blue-500 rounded-sm hover:border-b-4 cursor-pointer'>Following</p>
          </div>
        </div>

        <div className='w-full h-[150px] border-b border-zinc-700 flex flex-col justify-between max-[500px]:h-[120px] max-[500px]:mb-4'>
          <div className='flex flex-row p-2 gap-4'>
            <div className='w-[50px] h-[50px] bg-gray-700 rounded-full'></div>
            <input className='w-[80%] bg-transparent' type='text'  placeholder='Whats is Happenning?!'/>
          </div>
          <div className='w-full h-[50px] flex justify-end'>
            <button className=' w-[80px] h-[40px]  bg-blue-500  mr-6 rounded-2xl font-bold'> Tweet </button>
          </div>
        </div>

 
        <div className='Feed w-full overflow-y-auto'>
          <div className='w-full h-[600px] border-b border-zinc-700 flex flex-col items-center gap-4'>
            <section className='w-full h-[60px]  flex flex-row justify-between pl-4'>
              <div className='w-[70%] h-full  flex items-center gap-5'>
                <div className='w-[50px] h-[50px] bg-gray-800 rounded-full'></div>
                <div className='w-[80%] h-full flex flex-col justify-center'>
                  <div className='flex flex-row gap-5'>
                    <p className='font-bold'>Usuario X</p>
                    <p className='text-zinc-600 font-semibold'>20.05</p>
                  </div>
                  <p>Projeto feito para testar conhecimento</p>
                </div>
              </div>
              <div className='w-[15%]  flex items-center justify-center'>
                <img src={Menu} className='h-[30px] w-[30px]'/>
              </div>
            </section>

            <section className='w-[80%] h-[450px] bg-zinc-800 rounded-md'>

            </section>

            <section className='w-[80%] h-[40px]  flex items-center justify-evenly'>
              <div className='w-[100px]  flex flex-row gap-4'>
                <img src={Comment} className='h-[25px] w-[25px]'/>
                <p>1000</p>
              </div>

              <div className='w-[100px]  flex flex-row gap-4'>
                <img src={Retweet} className='h-[25px] w-[25px]'/>
                <p>50</p>
              </div>

              <div className='w-[100px]  flex flex-row gap-4'>
                <img src={Like} className='h-[25px] w-[25px]'/>
                <p>10000</p>
              </div>
            </section>
            
          </div>

          <div className='w-full h-[600px] border-b border-zinc-700 flex flex-col items-center gap-4'>
            <section className='w-full h-[60px]  flex flex-row justify-between pl-4'>
              <div className='w-[70%] h-full  flex items-center gap-5'>
                <div className='w-[50px] h-[50px] bg-gray-800 rounded-full'></div>
                <div className='w-[80%] h-full flex flex-col justify-center'>
                  <div className='flex flex-row gap-5'>
                    <p className='font-bold'>Usuario X</p>
                    <p className='text-zinc-600 font-semibold'>20.05</p>
                  </div>
                  <p>Projeto feito para testar conhecimento</p>
                </div>
              </div>
              <div className='w-[15%]  flex items-center justify-center'>
                <img src={Menu} className='h-[30px] w-[30px]'/>
              </div>
            </section>

            <section className='w-[80%] h-[450px] bg-zinc-800 rounded-md'>

            </section>

            <section className='w-[80%] h-[40px]  flex items-center justify-evenly'>
              <div className='w-[100px]  flex flex-row gap-4'>
                <img src={Comment} className='h-[25px] w-[25px]'/>
                <p>1000</p>
              </div>

              <div className='w-[100px]  flex flex-row gap-4'>
                <img src={Retweet} className='h-[25px] w-[25px]'/>
                <p>50</p>
              </div>

              <div className='w-[100px]  flex flex-row gap-4'>
                <img src={Like} className='h-[25px] w-[25px]'/>
                <p>10000</p>
              </div>
            </section>
            
          </div>

          <div className='w-full h-[600px] border-b border-zinc-700 flex flex-col items-center gap-4'>
            <section className='w-full h-[60px]  flex flex-row justify-between pl-4'>
              <div className='w-[70%] h-full  flex items-center gap-5'>
                <div className='w-[50px] h-[50px] bg-gray-800 rounded-full'></div>
                <div className='w-[80%] h-full flex flex-col justify-center'>
                  <div className='flex flex-row gap-5'>
                    <p className='font-bold'>Usuario X</p>
                    <p className='text-zinc-600 font-semibold'>20.05</p>
                  </div>
                  <p>Projeto feito para testar conhecimento</p>
                </div>
              </div>
              <div className='w-[15%]  flex items-center justify-center'>
                <img src={Menu} className='h-[30px] w-[30px]'/>
              </div>
            </section>

            <section className='w-[80%] h-[450px] bg-zinc-800 rounded-md'>

            </section>

            <section className='w-[80%] h-[40px]  flex items-center justify-evenly'>
              <div className='w-[100px]  flex flex-row gap-4'>
                <img src={Comment} className='h-[25px] w-[25px]'/>
                <p>1000</p>
              </div>

              <div className='w-[100px]  flex flex-row gap-4'>
                <img src={Retweet} className='h-[25px] w-[25px]'/>
                <p>50</p>
              </div>

              <div className='w-[100px]  flex flex-row gap-4'>
                <img src={Like} className='h-[25px] w-[25px]'/>
                <p>10000</p>
              </div>
            </section>
            
          </div>
        </div>
    </main>
  )
}

export default Main