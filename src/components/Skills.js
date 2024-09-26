import { RiHtml5Line } from 'react-icons/ri'
import { RiCss3Fill } from 'react-icons/ri'
import { RiReactjsLine } from 'react-icons/ri'
import { SiJavascript } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiGit } from 'react-icons/si'
import { SiBootstrap } from 'react-icons/si'
import { RiAngularjsFill } from 'react-icons/ri';

const Skills = () => {
    return (
        <section className="text-gray-900 container mt-44 min-w-full " id="about-me">
            <div data-aos="fade-right" data-aos-duration="1000" className="mb-20 mx-20" >
                <h2 className="secondary-title mb-16">Chi sono</h2>           
                <p className="font-normal text-base text-left leading-relaxed xl:w-2/4 lg:w-3/4">
                    Pensavo di voler diventare un <strong className='font-medium'>musicista</strong>, 
                    ma dopo anni di studio ho capito che gran parte della mia carriera sarebbe stata 
                    investita nell'insegnamento. Io desideravo qualcosa di più, qualcosa di diverso.
                </p>
                <p className="font-normal text-base text-left leading-relaxed xl:w-2/4 lg:w-3/4">
                    Ho deciso, quindi, di valorizzare il metodo e la disciplina aquisiti durante i miei 
                    studi e di metterli <strong className='font-medium'>al servizio della programmazione</strong>. 🚀
                </p>
                <p className="font-normal text-base text-left leading-relaxed xl:w-2/4 lg:w-3/4">
                    Amo la sensazione che provo quando riesco a risolvere un problema nel codice e costruire 
                    qualcosa da zero: <strong className='font-medium'>è un po' come scrivere una canzone</strong>, un modo alternativo per sfogare la mia creatività.
                </p>
            </div>

            <div className="mb-20 mx-20" id="skills">
                <h2 className="secondary-title mb-16">Hard skills</h2> 
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3 mx-20 pb-5">
                <div data-aos="zoom-in" data-aos-duration="1000" className="w-full">
                    <div className="bg-white border border-black rounded flex flex-col p-4 h-full items-center justify-center">
                        <div className="flex-row w-full flex justify-between items-center">
                            <RiHtml5Line className='w-8 h-8 inline-block'/>
                            <span className="title-font font-medium ml-1">HTML5</span>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" className="w-full">
                    <div className="bg-white border border-black rounded flex flex-col p-4 h-full items-center justify-center">
                        <div className="flex-row w-full flex justify-between items-center">
                            <RiCss3Fill className='w-8 h-8 inline-block'/>
                            <span className="title-font font-medium ml-1">CSS3</span>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" className="w-full">
                    <div className="bg-white border border-black rounded flex flex-col p-4 h-full items-center justify-center">
                        <div className="flex-row w-full flex justify-between items-center">
                            <SiJavascript className='w-8 h-8 inline-block'/>
                            <span className="title-font font-medium ml-1">Vanilla JS</span>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" className="w-full">
                    <div className="bg-white border border-black rounded flex flex-col p-4 h-full items-center justify-center">
                        <div className="flex-row w-full flex justify-between items-center">
                            <RiReactjsLine className='w-8 h-8 inline-block'/>
                            <span className="title-font font-medium ml-1">React</span>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" className="w-full">
                    <div className="bg-white border border-black rounded flex flex-col p-4 h-full items-center justify-center">
                        <div className="flex-row w-full flex justify-between items-center">
                            <RiAngularjsFill className='w-8 h-8 inline-block'/>
                            <span className="title-font font-medium ml-1">Angular</span>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" className="w-full">
                    <div className="bg-white border border-black rounded flex flex-col p-4 h-full items-center justify-center">
                        <div className="flex-row w-full flex justify-between items-center">
                            <SiRedux className='w-8 h-8 inline-block'/>
                            <span className="title-font font-medium ml-1">Redux</span>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" className="w-full">
                    <div className="bg-white border border-black rounded flex flex-col p-4 h-full items-center justify-center">
                        <div className="flex-row w-full flex justify-between items-center">
                            <SiTailwindcss className='w-8 h-8 inline-block'/>
                            <span className="title-font font-medium ml-1">Tailwind</span>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" className="w-full">
                    <div className="bg-white border border-black rounded flex flex-col p-4 h-full items-center justify-center">
                        <div className="flex-row w-full flex justify-between items-center">
                            <SiGit className='w-8 h-8 inline-block'/>
                            <span className="title-font font-medium ml-1">Git</span>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" className="w-full">
                    <div className="bg-white border border-black rounded flex flex-col p-4 h-full items-center justify-center">
                        <div className="flex-row w-full flex justify-between items-center">
                            <SiBootstrap className='w-8 h-8 inline-block'/>
                            <span className="title-font font-medium ml-1">Bootstrap</span>
                        </div>
                    </div>
                </div>
            </div>   
        </section>
    )
}

export default Skills
