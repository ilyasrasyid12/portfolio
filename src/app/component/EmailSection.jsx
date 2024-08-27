import React from 'react'
import GithubIcon from "../../../public/github-icon.svg"
import LinkedinIcon from "../../../public/linkedin-icon.svg"
import Link from "next/link"
import Image from "next/image"

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-2 md:my-12 py-20 gap-4'>
      <div>
        <h5 className='text-center text-4xl font-bold text-black mt-4 mb-4'>Lets connect</h5>
        <p className=' text-black mb-4 max-w-md'>
            {""}
            Terima kasih telah mengunjungi situs saya. Jika Anda memiliki pertanyaan, proyek yang ingin dibahas, atau ingin menjalin kerja sama, jangan ragu untuk menghubungi saya.
        </p>
        <div className="socials flex flex-row gap-2">
            <Link href="github.com">
                <Image src={GithubIcon} alt='github'/>
            </Link>
            <Link href="linkedin.com">
                <Image src={LinkedinIcon} alt='linkedin'/>
            </Link>
        </div>
      </div>

      <div>
        <form className='flex flex-col gap-4' action="">
            <div className="mb-6">
              <label htmlFor="email" className='text-slate-800 block mb-2 text-sm font-medium'>Your Email</label>
              <input 
              type="email" 
              id='email' 
              required 
              className='bg-white border border-primary placeholder-slate-600 text-gray-600 text-sm rounded-lg block w-full p-2.5'
              placeholder='ilyas@gmail.com' />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className='text-slate-800 block mb-2 text-sm font-medium'>Subject</label>
              <input 
              type="text" 
              id='subject' 
              required 
              className='bg-white border border-primary placeholder-slate-600 text-gray-600 text-sm rounded-lg block w-full p-2.5'
              placeholder='just saying Hi' />
            </div>
            <div className="mb-6">
              <label 
              htmlFor="message"
              className='text-slate-600 block text-sm font-medium'
              >Message</label>
              <textarea 
              name="message" 
              id="message"
              className='bg-white border border-primary placeholder-slate-500 text-black text-sm rounded-lg block w-full p-2.5'
              placeholder="let's talk about"
              />
            </div>
            <button 
            type='submit'
            className='bg-primary hover:bg-secondary text-white hover:text-black font-medium py-2.5 px-5 rounded-lg w-full'
            > Send</button>
        </form>
      </div>

    </section>
  )
}

export default EmailSection
