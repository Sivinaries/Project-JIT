import Hero from '../components/Home/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
    return (
        <main className='flex flex-col'>
            <Navbar />
            <div className='w-full mx-auto'>
                <Hero />
            </div>
            <Footer />
        </main>
    )
}

export default Home
