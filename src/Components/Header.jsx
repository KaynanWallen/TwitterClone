import React from 'react'

import Twitter from '../assets/Twitter.svg'
import Home from '../assets/Home.svg'
import Hashtag from '../assets/Hashtag.svg'
import Notification from '../assets/Notification.svg'
import Message from '../assets/Message.svg'
import List from '../assets/List.svg'
import Bookmark from '../assets/Bookmark.svg'
import TwitterCircle from '../assets/Twitter Circle.svg'
import Profile from '../assets/Profile.svg'
import More from '../assets/More.svg'
import Search from '../assets/Search.svg'

function Header() {
  return (
    <header className='w-[300px] h-full bg-black fixed  max-[1200px]:w-[60px] max-[500px]:w-full max-[500px]:h-[80px]'>
        <div className='w-full h-full flex flex-col gap-6 max-[500px]:flex max-[500px]:flex-row max-[500px]:justify-around'>
            <img src={Twitter} className='w-[40px] pt-4 pb-4 max-[500px]:hidden'/>

            <section className='flex flex-row items-center gap-3'>
                <img src={Home} className='w-[40px] h-[40px] '/>
                <p className='font-bold text-lg max-[1200px]:hidden'>Home</p>
            </section>

            <section className='flex flex-row items-center gap-3 hidden max-[950px]:flex'>
                <img src={Search} className='w-[40px] h-[40px]'/>
            </section>

            <section className='flex flex-row items-center gap-3 max-[500px]:hidden'>
                <img src={Hashtag} className='w-[40px] h-[40px]'/>
                <p className='font-bold text-lg max-[1200px]:hidden'>Explore</p>
            </section>

            <section className='flex flex-row items-center gap-3'>
                <img src={Notification} className='w-[40px] h-[40px]'/>
                <p className='font-bold text-lg max-[1200px]:hidden'>Notification</p>
            </section>

            <section className='flex flex-row items-center gap-3'>
                <img src={Message} className='w-[40px] h-[40px]'/>
                <p className='font-bold text-lg max-[1200px]:hidden'>Message</p>
            </section>

            <section className='flex flex-row items-center gap-3 max-[500px]:hidden'>
                <img src={List} className='w-[40px] h-[40px]'/>
                <p className='font-bold text-lg max-[1200px]:hidden'>List</p>
            </section>

            <section className='flex flex-row items-center gap-3 max-[500px]:hidden'>
                <img src={Bookmark} className='w-[40px] h-[40px]'/>
                <p className='font-bold text-lg max-[1200px]:hidden'>Bookmark</p>
            </section>

            <section className='flex flex-row items-center gap-3 max-[500px]:hidden'>
                <img src={TwitterCircle} className='w-[40px] h-[40px]'/>
                <p className='font-bold text-lg max-[1200px]:hidden'>TwitterCircle</p>
            </section>

            <section className='flex flex-row items-center gap-3 max-[500px]:hidden'>
                <img src={Profile} className='w-[40px] h-[40px]'/>
                <p className='font-bold text-lg max-[1200px]:hidden'>Profile</p>
            </section>

            <section className='flex flex-row items-center gap-3 max-[500px]:hidden'>
                <img src={More} className='w-[40px] h-[40px]'/>
                <p className='font-bold text-lg max-[1200px]:hidden'>More</p>
            </section>
        </div>
    </header>
  )
}

export default Header