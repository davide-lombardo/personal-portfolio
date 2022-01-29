import { HiFastForward } from 'react-icons/hi';
import { HiPresentationChartLine } from 'react-icons/hi';
import { HiLightBulb } from 'react-icons/hi'; 


const Features = () => {
    return (
    <>
        <section className="text-gray-900 mt-44" id='features'>
            <h1 className="secondary-title ml-20">Features</h1>
            <div className="container pt-16 pb-20 md:mx-44">
                <div data-aos="fade-right" data-aos-duration="1500" className="flex justify-center items-center border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-sky-300 flex-shrink-0">
                        <HiFastForward className="sm:w-16 sm:h-16 w-10 h-10 text-blue-300"/>
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium mb-2">Veloce</h2>
                        <p className="leading-relaxed text-base font-light mx-24 sm:mx-0">Tempi di caricamento in un batter d'occhio.</p>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1500" className="flex items-center sm:flex-row flex-col border-b pb-10 mb-10 border-gray-200">
                    <div className="sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium mb-2">Dinamico</h2>
                        <p className="leading-relaxed text-base font-light mx-24 sm:mx-0">Basta siti noiosi, benvenute caratteristiche uniche.</p>
                    </div>
                    <div className="sm:ml-10 sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 inline-flex items-center justify-center rounded-full bg-sky-300 flex-shrink-0">
                        <HiPresentationChartLine className="sm:w-16 sm:h-16 w-10 h-10 text-blue-300"/>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="1500" className="flex items-center sm:flex-row flex-col">
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-sky-300 flex-shrink-0">
                        <HiLightBulb className="sm:w-16 sm:h-16 w-10 h-10 text-blue-300"/>
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium mb-2">Intuitivo</h2>
                        <p className="leading-relaxed text-base font-light mx-24 sm:mx-0">Facile da usare, UX/UI intuitiva per tutti.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Features
