"use client"

import Image from 'next/image'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import  owl  from '/public/owl.png'
import eamon from '/public/eamon.png'
import news from '/public/news.png'
import music from '/public/music.png'
import search from '/public/search.png'
import drawing from '/public/drawing.jpg'
import macbookpro from '/public/macbookpro.jpg'
import visualdesign from '/public/visualdesign.jpg'
import wireframe from '/public/wireframe.jpg'
import { useState } from 'react'


export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className='bg-white md:px-20 lg:px-40 dark:bg-gray-900'>
        <section 
          className='
            min-h-screen 
            px-10'>
          <nav 
            className='
              py-10 
              mb-12 
              flex 
              justify-between'>
            <h1 className='text-xl font-burtons dark:text-teal-600'>DEVELOPED BY</h1>
            <ul className='flex items-center'>
              <li>
                {darkMode ? ( // Conditional rendering
                  <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className='cursor-pointer text-xl dark:text-teal-600'
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className='cursor-pointer text-xl dark:text-teal-600'
                  />
                )}
              </li>
              <li>
                <a 
                  className=' 
                  bg-gradient-to-r from-cyan-500 to-teal-500 
                  text-white 
                  px-4 
                  py-2 
                  rounded-md 
                  ml-6' 
                  href='#'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl lg:text-7xl'>Julio Camargo</h2>
            <h3 className='
            text-3xl 
            py-2 
            md:text-4xl
            dark:text-teal-600
            '>Front-end Developer</h3>
            <p className=' 
            text-md py-5 
            leading-8 
            text-gray-800 
            md:text-xl 
            max-w-xl 
            m-auto
            dark:text-teal-600
            '>
              I'm a Front-end Developer with 2 years of experience. I'm currently freelancing as a Front-end Developer.
            </p>
          </div>
          <div 
          className='
            text-5xl 
            flex 
            justify-center 
            gap-16 
            py-3 
            text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillYoutube />
            <AiFillLinkedin />
          </div>
          <div
            className='
            relative 
            mx-auto 
            mt-20 
            bg-gradient-to-b from-teal-500 
            rounded-full 
            w-80 
            h-80 
            '
          >
            <Image
            className=' mx-auto rounded-xl md:h-64 md:w-64'
                src={eamon}
                alt='Picture of the author'
                width={200}
                height={200}
                // object-fit="cover"
            />
          </div>
        </section>
        <section>
          <div className='text-left p-10'>
            <h3 className='text-3xl py-1 text-teal-600 md:text-5xl'>Service I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 md:text-lg dark:text-teal-600'>
              I offer a range of services to help you bring your web projects to life. Whether  you're a small business owner looking to establish your online presence or a fellow freelancer in need of an extra pair of hands.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 md:text-lg dark:text-teal-600'>
              I can provide the expertise and skills necessary to deliver exceptional front-end development solutions.
            </p>
          </div>
          <div className='gap-2 md:flex md:gap-4'>
          <div>
            <div 
              className='
              text-center 
              shadow-lg 
              rounded-xl 
              my-10 
              mx-2 
              p-10'
              >
              <Image
              className=' mx-auto'
              alt='news icon'
              src={news} 
              width={100}
              height={100}
              />
              <h3 className='text-lg font-medium py-1 pt-8 pb-2 text-teal-600 md:text-4xl'>Beautiful Designs</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-teal-600'>Beautiful designs that are easy to use and pleasing to the eye.</p>
              <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
              <p className=' text-gray-800 py-1 dark:text-teal-600'>Photoshop</p>
              <p className=' text-gray-800 py-1 dark:text-teal-600'>Illustrator</p>
              <p className=' text-gray-800 py-1 dark:text-teal-600'>Figma</p>  
            </div>
          </div>
          <div>
            <div 
              className='
              text-center 
              shadow-lg 
              rounded-xl 
              my-10 
              mx-2 
              p-10'
              >
              <Image
              className=' mx-auto'
              alt='news icon'
              src={music} 
              width={100}
              height={100}
              />
              <h3 className='text-lg font-medium py-1 pt-8 pb-2 text-teal-600 md:text-4xl'>Beautiful Designs</h3>
              <p className='text-md py-2 leading-8 text-gray-800'>Beautiful designs that are easy to use and pleasing to the eye.</p>
              <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
              <p className=' text-gray-800 py-1 dark:text-teal-600'>Photoshop</p>
              <p className=' text-gray-800 py-1 dark:text-teal-600'>Illustrator</p>
              <p className=' text-gray-800 py-1 dark:text-teal-600'>Figma</p>
            </div>
          </div>
          <div>
            <div 
              className='
              text-center 
              shadow-lg 
              rounded-xl 
              my-10 
              mx-2 
              p-10'
              >
              <Image
              className=' mx-auto'
              alt='news icon'
              src={search} 
              width={100}
              height={100}
              />
              <h3 className='text-lg font-medium py-1 pt-8 pb-2 text-teal-600 md:text-4xl'>Beautiful Designs</h3>
              <p className='text-md py-2 leading-8 text-gray-800'>Beautiful designs that are easy to use and pleasing to the eye.</p>
              <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
              <p className=' text-gray-800 py-1 dark:text-teal-600'>Photoshop</p>
              <p className=' text-gray-800 py-1 dark:text-teal-600'>Illustrator</p>
              <p className=' text-gray-800 py-1 dark:text-teal-600'>Figma</p>
            </div>
          </div>
          </div>
        </section>
        <section>
          <div className='text-left p-10'>
            <h3 className='text-3xl py-1 text-teal-600 md:text-5xl'>Portifolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 md:text-lg'>
              I offer a range of services to help you bring your web projects to life. Whether  you're a small business owner looking to establish your online presence or a fellow freelancer in need of an extra pair of hands.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 md:text-lg'>
              I can provide the expertise and skills necessary to deliver exceptional front-end development solutions.
            </p>
          </div>
        </section>
        <section>
          <div className='text-center p-10 shadow-lg rounded-xl my-10 mx-2'>
            <h3 className='text-3xl py-1 text-teal-600 md:text-5xl'>Some of my work</h3>
          </div>
          <div className='flex flex-col gap-10 px-4 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image
              className=' rounded-lg object-cover'
              
              alt='drawing image'
              src={wireframe}
              
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
              className=' rounded-lg object-cover'
              alt='drawing image'
              src={visualdesign}
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
              className=' rounded-lg object-cover'
              alt='drawing image'
              src={drawing}
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
              className=' rounded-lg object-cover ' 
              alt='drawing image'
              src={macbookpro}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
