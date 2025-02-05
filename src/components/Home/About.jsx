import about from '../../assets/images/about.png';

function About() {
    return (
        <section id='about'>
        <div className="grid grid-cols-1 bg-black h-full">
            <div className="my-8 md:my-20">
                <div className="mx-4 md:mx-20">
                    <div className="md:flex space-y-4 md:gap-4 items-center">
                        <div className="md:w-1/2">
                            <img className="w-full h-full" src={about} alt="About Us" />
                        </div>
                        <div className="space-y-4 md:space-y-12 md:w-1/2 flex flex-col justify-center my-auto">
                            <h1 className="text-white text-2xl md:text-5xl font-semibold">About Us</h1>
                            <h1 className="text-white text-2xl md:text-5xl font-semibold">
                                Lorem ipsum odor amet, consectetuer adipiscing elit.
                            </h1>
                            <p className="text-white text-base md:text-4xl font-light">
                                Lorem ipsum odor amet, consectetuer adipiscing elit. Viverra eleifend vulputate erat dis dignissim sit blandit rhoncus. Ligula nec aliquet auctor torquent diam mus maximus et. Conubia metus integer aliquam id mus interdum interdum dapibus. Metus auctor lectus donec conubia natoque ultrices pretium mauris phasellus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default About;
