import { SiGithub } from 'react-icons/si'
import bookSearchThumb from '../img/bookSearchThumb.png';
import globalPollutionThumb from '../img/globalPollutionThumb.png';
import fakeShopThumb from '../img/fakeShopThumb.png';


const CardContainer = () => {

    return (
    <>
        <div>
            <h1 className="secondary-title mt-44 ml-20 text-gray-900">I miei progetti</h1>
        </div>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 mx-20 z-10" id="projects">
            <div className="card">
                <img
                    src={fakeShopThumb}
                    alt="book search thumbnail"
                    className="w-full object-cover"
                />
                <div className="p-7 text-center">
                    <h3 className="font-semibold text-xl text-left mb-4 block"> 
                        Fake Shop
                    </h3>
                    <p className="text-left text-base font-light leading-relaxed mb-7">
                        Ricerca un prodotto e mettilo nel carrello.
                    </p>
                    <div className='flex lg:flex-col justify-around'>
                        <a className="badge-2" href="https://e-app-8e18f.web.app/" rel="noopener noreferrer" target="_blank">
                            Live Demo
                        </a>
                        
                        <a className="badge-1" href="https://github.com/davide-lombardo/fake-shop" rel="noopener noreferrer" target="_blank">
                            <SiGithub/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="card">
                <img
                    src={bookSearchThumb}
                    alt=""
                    className="w-full object-cover"
                />
                <div className="p-7 text-center">
                    <h3 className="font-semibold text-xl text-left mb-4 block"> 
                        Book Finder
                    </h3>
                    <p className="text-left text-base font-light text-gray-900 leading-relaxed mb-7">
                        Ricerca qualsiasi libro che ti viene in mente.
                    </p>
                    <div>
                        
                    </div>
                    <div className='flex lg:flex-col justify-around'>
                        <a className="badge-2" href="https://bookfindersite.netlify.app/" rel="noopener noreferrer" target="_blank">
                            Live Demo
                        </a>
                        
                        <a className="badge-1" href="https://github.com/davide-lombardo/book-finder" rel="noopener noreferrer" target="_blank">
                            <SiGithub/>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="card">
                <img
                    src={globalPollutionThumb}
                    alt=""
                    className="w-full object-cover"
                />
                <div className="p-7 text-center">
                    <h3 className="font-semibold text-xl text-left mb-4 block"> 
                        Global Pollution
                    </h3>
                    <p className="text-left text-base font-light text-gray-900 leading-relaxed mb-7">
                       Recupera i dati sull'inquinamento.
                    </p>
                    <div className='flex lg:flex-col justify-around'>
                        <a className="badge-2" href="https://pollution-global.netlify.app/" rel="noopener noreferrer" target="_blank">
                            Live Demo
                        </a>
                        
                        <a className="badge-1" href="https://github.com/davide-lombardo/pollution-global" rel="noopener noreferrer" target="_blank">
                            <SiGithub/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default CardContainer

