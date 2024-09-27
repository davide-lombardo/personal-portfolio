import { RiLinkedinBoxFill } from 'react-icons/ri';
import { SiGithub } from 'react-icons/si';

const Contact = () => {
    return (
        <section className="text-gray-900 mt-44 flex flex-col md:flex-row mx-20" id='contact'>
            <div className="mb-20">
                <h1 className="secondary-title">Contatti</h1>

                <div className="mt-8">
                    <span className='inline-flex justify-center'>
                        <a href='https://github.com/davide-lombardo' rel="noopener noreferrer" target="_blank">
                            <SiGithub className='w-7 h-7 fill-black hover:opacity-80'/>
                        </a>
                        <a href='https://www.linkedin.com/in/lombardo-davide/' rel="noopener noreferrer" target="_blank">
                            <RiLinkedinBoxFill className='ml-4 w-8 h-8 fill-black hover:opacity-80'/>
                        </a>
                    </span>
                </div>
                <div className='flex justify-start lg:justify-end mt-20 mb-20'>
                    <h4 className="text-5xl md:text-4xl lg:text-5xl mb-4 font-display font-extrabold">Davide Lombardo</h4>
                </div>
            </div>
        </section>
    )
}

export default Contact
