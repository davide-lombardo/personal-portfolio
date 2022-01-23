import heroImg from '../img/hero.png';
import { AiOutlineEye } from 'react-icons/ai'


const Hero = () => {
    return (
        <section className="container flex py-24 md:flex-row flex-col items-center min-w-full text-gray-900">
            <div 
                data-aos="fade-up"
                data-aos-duration="2500" 
                className="md:ml-20 flex lg:flex-grow md:w-1/2 lg:pr-20 md:pr-20 flex-col md:items-start items-center md:text-left text-center mb-16 md:mb-0">
                <h1 className="md:text-4xl text-3xl mb-4 font-extrabold">Sviluppo esperienze che lasciano il segno.</h1>
                <p className="mb-7 leading-relaxed font-medium">Davide Lombardo - Frontend Developer.</p>
                <div className="flex justify-center flex-row md:flex-col lg:flex-row">
                    <button className="hero-cta bg-sky-300 hover:bg-sky-200 mr-2">
                        <AiOutlineEye className='mr-2'/>
                        <a href="#projects">i miei progetti</a> 
                    </button>
                    <button className="hero-cta bg-orange-300 hover:bg-orange-200 mt-1 lg:mt-0">
                        <AiOutlineEye className='mr-2'/>
                        <a href="#skills">le mie skill</a> 
                    </button>
                </div>
            </div>
            <div 
                className="lg:max-w-md md:w-1/2 w-5/6"
                data-aos="fade-down-left"
                data-aos-duration="2500"
            >
                <img 
                    alt="hero" 
                    src={heroImg}
                />
            </div>
        </section>
    )
}


export default Hero
