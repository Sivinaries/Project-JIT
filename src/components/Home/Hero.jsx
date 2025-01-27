import bg from '../../assets/images/bg.png'
import school from '../../assets/images/school.png'

function Hero() {

  return (
    <div
      className="grid grid-cols-1 h-screen bg-cover w-full bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="my-auto md:my-56 mx-2 md:mx-20 space-y-4 md:space-y-8">
        <div>
          <h1 className='text-white text-3xl md:text-7xl font-semibold'>
            Level Up Your Learning with Study
          </h1>
          <h1 className='text-white text-3xl md:text-7xl font-semibold'>
            Immersion Abroad!
          </h1>
        </div>
        <div className='md:w-1/3'>
          <h1 className='text-lg md:text-xl font-light text-white'>
            Take your education beyond the classroom and dive into real-world experiences across Asia’s top destinations. 🌏
          </h1>
        </div>
        <div className='grid md:flex justify-between gap-6'>
        <div className='p-2 md:p-4 bg-cyan-500 w-full md:w-fit h-fit rounded-full order-2 md:order-none'>
            <a href="">
              <h1 className='text-white font-semibold text-2xl md:text-4xl text-center px-4 md:px-6'>Book Now</h1>
            </a>
          </div>
          <div className='p-4 bg-gray-500 backdrop-blur-sm bg-opacity-40 rounded-3xl order-1 md:order-none'>
            <div className=''>
              <img className='w-full h-full' src={school} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
