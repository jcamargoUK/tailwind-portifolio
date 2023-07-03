import Image from 'next/image'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import  owl  from '/public/owl.png'

export default function Home() {
  return (
    <div>
      <main>
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
            <h1 className='text-xl font-burtons'>DEVELOPED BY</h1>
            <ul className='flex items-center'>
              <li>< BsFillMoonStarsFill className=' cursor-pointer text-xl' /></li>
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
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Julio Camargo</h2>
            <h3 className='text-2xl py-2'>Front-end Developer</h3>
            <p className=' text-md py-5 leading-8 text-gray-800'>
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
                src={owl}
                alt='Picture of the author'
                object-fit="cover"
                
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Service that I offer</h3>
            <p className='text-md- py-2 leading-8 text-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
              Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
              Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            </p>
            <p className='text-md- py-2 leading-8 text-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
              Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            </p>
          </div>
          <div>
            <div>
              
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
