import { RiHtml5Line } from 'react-icons/ri'
import { RiCss3Fill } from 'react-icons/ri'
import { RiReactjsLine } from 'react-icons/ri'
import { SiJavascript } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { SiWordpress } from 'react-icons/si'
import { SiBootstrap } from 'react-icons/si'


const Skills = () => {
    return (
        <section className="text-gray-900 container mt-44 min-w-full" id="about-me">
            <div data-aos="fade-right" data-aos-duration="1000" className="mb-20 mx-20" >
                <h1 className="secondary-title mb-16">Chi sono</h1>           
                <p className="font-light text-base text-left leading-relaxed xl:w-2/4 lg:w-3/4">Pensavo che la mia strada fosse quella di diventare un <strong className='font-medium'>musicista professionista,</strong> ma dopo anni di studio mi sono accorto che buona parte della mia carriera sarebbe stata investita invece nell'insegnamento. Volevo qualcosa di più, volevo qualcosa di diverso.</p>
                <p className="font-light text-base text-left leading-relaxed xl:w-2/4 lg:w-3/4">Ho deciso di sfruttare il metodo e la disciplina che ho acquisito imparando a suonare uno strumento musicale a livello professionale, e metterla <strong className='font-medium'>al servizio della programmazione.</strong> Ho scoperto un mondo stimolante dove poter esprimere il mio lato creativo.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-3 mx-20 pb-5" id="skills">
                <div data-aos="zoom-in" data-aos-duration="500"  className="w-full">
                    <div data-aos="zoom-in" data-aos-duration="500" className="bg-gray-200 rounded flex p-4 h-full items-center">
                        <RiHtml5Line className='w-6 h-6'/>
                        <span className="title-font font-medium ml-3">HTML</span>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500"  className="w-full">
                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                        <RiCss3Fill className='w-6 h-6'/>
                        <span className="title-font font-medium ml-3">CSS</span>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500" className="w-full">
                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                        <SiJavascript className='w-6 h-6'/>
                        <span className="title-font font-medium ml-3">Javascript</span>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500"  className="w-full">
                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                        <RiReactjsLine className='w-6 h-6'/>
                        <span className="title-font font-medium ml-3">React</span>
                        </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500"  className="w-full">
                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                        <SiRedux className='w-6 h-6'/>
                        <span className="title-font font-medium ml-3">Redux</span>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500"  className="w-full">
                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                        <SiTailwindcss className='w-6 h-6'/>
                        <span className="title-font font-medium ml-3">Tailwind</span>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500"  className="w-full">
                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                        <SiGithub className='w-6 h-6'/>
                        <span className="title-font font-medium ml-3">Github</span>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500"  className="w-full">
                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                        <SiBootstrap className='w-6 h-6'/>
                        <span className="title-font font-medium ml-3">Bootstrap</span>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500" className="w-full">
                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                        <SiWordpress className='w-6 h-6'/>
                        <span className="title-font font-medium ml-3">Wordpress</span>
                    </div>
                </div>
            </div>   
        </section>
    )
}

export default Skills
