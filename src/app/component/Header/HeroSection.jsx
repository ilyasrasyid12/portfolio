"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className='text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
              <span className='bg-clip-text text-primary'>
                Hello, I'm {""}
              </span>
              <br/>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Ilyas Rasyid',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Fullstack Developer',
                  1000,
                  'Designer', 
                  1000,
                  'Machine Learning Engineer',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className='text-black text-base sm:text-lg mb-6 lg:text-xl '>
              Selamat datang di portofolio saya! Di bawah ini, Anda dapat melihat berbagai proyek yang telah saya kerjakan.
            </p>
            <div className='block'>
                <button className='px-6 py-3 w-full mb-4 sm:w-fit rounded-full mr-4 hover:bg-secondary bg-primary text-white hover:text-black'>Hire Me</button>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 hover:bg-secondary bg-primary text-white hover:text-black'>Download</button>
            </div>
        </div>

        <div className="col-span-5 place-self-center mt-8 lg:mt-0">
            <div className="rounded-full bg-primary w-[250px] h-[250px] relative">
                <Image 
                src="/images/ilyas.png"
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                width={300}
                height={300}
                />
            </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
