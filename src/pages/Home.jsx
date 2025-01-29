import Hero from '../components/Home/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Journey from '../components/Home/Journey'
import Enjoy from '../components/Home/Enjoy'
import Why from '../components/Home/Why'
import Whatsapp from '../components/Whatsapp'

function Home() {
    return (
        <main className='flex flex-col'>
            <Navbar />
            <div className='w-full mx-auto'>
                <Hero />
                <Whatsapp />
                <Journey />
                <Enjoy />
                <Why />
            </div>
            <Footer />
        </main>
    )
}

export default Home
