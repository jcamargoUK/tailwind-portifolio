import Image from 'next/image'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import  owl  from '/public/owl.png'
import eamon from '/public/eamon.png'

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
            className=' mx-auto rounded-xl'
                src={eamon}
                alt='Picture of the author'
                width={200}
                height={200}
                // object-fit="cover"
                
            />
          </div>
        </section>
        <section>
          <div className='text-center p-10'>
            <h3 className='text-3xl py-1 text-teal-600'>Service that I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I offer a range of services to help you bring your web projects to life. Whether  you're a small business owner looking to establish your online presence or a fellow freelancer in need of an extra pair of hands.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I can provide the expertise and skills necessary to deliver exceptional front-end development solutions.
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
