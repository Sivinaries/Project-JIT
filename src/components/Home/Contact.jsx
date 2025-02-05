import React from 'react'

function Contact() {
  return (
    <section id='contact'>
    <div className="grid grid-cols-1 bg-black h-full">
      <div className="my-8 md:my-20">
        <div className="mx-4 md:mx-20">
          <div className='space-y-4 md:space-y-12'>
            <div className="">
              <h1 className="text-white text-2xl md:text-5xl font-semibold">We are always ready to help you</h1>
              <h1 className="text-white text-2xl md:text-5xl font-semibold">and answer your questions</h1>
            </div>
            <div className='p-4 md:p-16 space-y-2 md:space-y-8 bg-white rounded-3xl'>
              <div>
                <h1 className='text-center text-2xl text-white md:text-5xl font-semibold'>Get in Touch</h1>
              </div>
              <div className='md:flex md:gap-4'>
                <div className="space-y-2 md:space-y-12 md:w-1/2 flex flex-col justify-center my-auto">
                  <div className='space-y-2'>
                    <h1 className='text-lg md:text-2xl font-light'>Full Name</h1>
                    <input className='bg-gray-100 rounded-3xl w-full border-2 border-black p-2' type="text" />
                  </div>
                  <div className='space-y-2'>
                    <h1 className='text-lg md:text-2xl font-light'>Email Address</h1>
                    <input className='bg-gray-100 rounded-3xl w-full border-2 border-black p-2' type="text" />
                  </div>
                </div>
                <div className='md:w-1/2'>
                  <div className='space-y-2'>
                    <h1 className='text-lg md:text-2xl font-light'>Message</h1>
                    <input className='bg-gray-100 rounded-3xl w-full border-2 border-black p-2 h-44 md:h-56' type="text" />
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center p-2 md:p-4  bg-teal-500 rounded-3xl w-full md:w-1/4 mx-auto'>
                <button>
                  <h1 className='text-2xl md:text-3xl text-white'>Send</h1>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Contact