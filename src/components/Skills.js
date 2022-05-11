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
        <section className="text-gray-900 container mt-44 min-w-full " id="about-me">
            <div data-aos="fade-right" data-aos-duration="1000" className="mb-20 mx-20" >
                <h1 className="secondary-title mb-16">Chi sono</h1>           
                <p className="font-normal text-base text-left leading-relaxed xl:w-2/4 lg:w-3/4">Pensavo di voler diventare un <strong className='font-medium'>musicista</strong>, ma dopo anni di studio ho capito che buona parte della mia carriera sarebbe stata investita nell'insegnamento. Io volevo qualcosa di più, qualcosa di diverso.</p>
                <p className="font-normal text-base text-left leading-relaxed xl:w-2/4 lg:w-3/4">Ho deciso, quindi, di valorizzare il metodo e la disciplina aquisiti durante i miei studi e metterli <strong className='font-medium'>al servizio della programmazione</strong>.</p>
                <p className="font-normal text-base text-left leading-relaxed xl:w-2/4 lg:w-3/4">Amo la sensazione che provo quando riesco a risolvere un problema nel codice e costruire qualcosa da zero: è un po' come scrivere una canzone, un modo alternativo per sfogare la mia creatività.</p>
                <h2 className="font-medium text-lg text-left leading-relaxed">Alcune mie competenze:</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-3 mx-20 pb-5" id="skills">
                <div data-aos="zoom-in" data-aos-duration="500"  className="w-full">
                    <div className="bg-white border border-black rounded flex p-4 h-full items-center">
                        <RiHtml5Line className='w-6 h-6'/>
                        <span className="title-font font-medium ml-3">HTML5</span>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000"  className="w-full">
                    <div className="bg-white border border-black rounded flex p-4 h-full items-center">
                        <RiCss3Fill className='w-6 h-6'/>
                        <span className="title-font font-medium ml-3">CSS3</span>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className="w-full">
                    <div className="bg-white border border-black rounded flex p-4 h-full items-center">
                        <SiJavascript className='w-6 h-6'/>
                        <span className="title-font font-medium ml-3">Vanilla JavaScript</span>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000"  className="w-full">
                    <div className="bg-white border border-black rounded flex p-4 h-full items-center">
                        <RiReactjsLine className='w-6 h-6'/>
                        <span className="title-font font-medium ml-3">React</span>
                        </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000"  className="w-full">
                    <div className="bg-white border border-black rounded flex p-4 h-full items-center">
                        <SiRedux className='w-6 h-6'/>
                        <span className="title-font font-medium ml-3">Redux</span>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000"  className="w-full">
                    <div className="bg-white border border-black rounded flex p-4 h-full items-center">
                        <SiTailwindcss className='w-6 h-6'/>
                        <span className="title-font font-medium ml-3">Tailwind</span>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000"  className="w-full">
                    <div className="bg-white border border-black rounded flex p-4 h-full items-center">
                        <SiGithub className='w-6 h-6'/>
                        <span className="title-font font-medium ml-3">Git</span>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000"  className="w-full">
                    <div className="bg-white border border-black rounded flex p-4 h-full items-center">
                        <SiBootstrap className='w-6 h-6'/>
                        <span className="title-font font-medium ml-3">Bootstrap</span>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className="w-full">
                    <div className="bg-white border border-black rounded flex p-4 h-full items-center">
                        <SiWordpress className='w-6 h-6'/>
                        <span className="title-font font-medium ml-3">Wordpress</span>
                    </div>
                </div>
            </div>   
        </section>
    )
}

export default Skills
