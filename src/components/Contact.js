import { useState } from 'react'
import emailjs from 'emailjs-com'
import contactImg from '../img/contactImg.png'
import { VscError } from 'react-icons/vsc'
import classNames from 'classnames';
import { SiGithub } from 'react-icons/si'
import { RiLinkedinBoxFill } from 'react-icons/ri'

const Contact = () => {

    const [ error, setError ] = useState('')
    const [ success, setSuccess ] = useState('')
    const [ isItemRemoved, setIsItemRemoved ] = useState(false)


    const [ formState, setFormState ] = useState({
        name: '',
        email: '',
        message: '',
    })

    const { name, email, message } = formState

    const handleChange = (e) => {
        let { name, value } = e.target
        setFormState({ ...formState, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            setError('')

            emailjs.sendForm('portfolio', 'template_8sf33ta', e.target, "user_XG3GN1haMQ6noZ8y9ErmE")
            .then((response) => {
                console.log('SUCCESS', response.status, response.text);
                setSuccess('Invio riuscito')
            }, (error) => {
                console.log('ERROR', error);
            });
        } catch {
            setError('Oops, Invio non riuscito')
        }
        setFormState({name: '', email: '', message: ''})
    };

    return (
        <section className="text-gray-900 mt-44 min-w-full flex flex-col md:flex-row" id='contact'>
            <div className="lg:pb-16 lg:px-20">
                <div className="mb-10 flex flex-col justify-items-center mx-6">
                    <h1 className="secondary-title">Vuoi parlare con me?</h1>
                    <p className=" leading-relaxed text-base font-medium">Ottima scelta, rispondo dopo i pasti.</p>
                </div>
            
                <div className="flex justify-center">
                    <div className="flex sm:justify-items-start flex-wrap">
                        <form onSubmit={handleSubmit} className='flex flex-col'>
                            <div className="p-1 w-full">
                            {
                                (error) ?
                                <div role="alert" className={classNames([
                                    "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 relative" 
                                    + (isItemRemoved ? " hidden" : " flex")
                                    ])}
                                >
                                    {error}
                                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                        <VscError onClick={() => setIsItemRemoved(!isItemRemoved)} className='cursor-pointer hover:opacity-50 fill-current h-6 w-6 text-red-500'/>
                                    </span>
                                </div> 
                                
                                : (success) ?
                                <div role="alert" className={classNames([
                                    "bg-teal-100 border border-teal-500 text-teal-900 px-4 py-3 rounded mb-4 relative" 
                                    + (isItemRemoved ? " hidden" : " flex")
                                    ])}
                                >
                                    {success}
                                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                        <VscError onClick={() => setIsItemRemoved(!isItemRemoved)} className='cursor-pointer hover:opacity-50 fill-current h-6 w-6 text-teal-900'/>
                                    </span>
                                </div> : null
                            }
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nome Completo</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name"
                                        placeholder='Nome Completo'
                                        onChange={handleChange}
                                        value={name || ''} 
                                        required 
                                        className="input"
                                    />
                                </div>
                            </div>
                            <div className="p-1 w-full">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        placeholder='Email'
                                        onChange={handleChange}
                                        value={email || ''} 
                                        required 
                                        className="input"
                                    />
                                </div>
                            </div>
                            <div className="p-1 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Messaggio</label>
                                    <textarea
                                        type="text"
                                        id="message" 
                                        name="message"
                                        placeholder='Email'
                                        onChange={handleChange}
                                        value={message || ''} 
                                        required 
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-300 focus:bg-white focus:ring-2 focus:ring-orange-100 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button type='submit' value='Send' className="flex mx-auto text-white bg-sky-300 border-0 py-2 px-8 focus:outline-none hover:bg-sky-100 rounded text-lg">Invia</button>
                            </div>
                        </form>
                 
                    </div>
                </div>
                <div className="flex flex-col p-4 pt-8 mt-8 border-t border-gray-200">
                    <span className='inline-flex justify-center'>
                        <a href='https://github.com/davide-lombardo' rel="noopener noreferrer" target="_blank">
                            <SiGithub className='w-7 h-7 fill-black hover:opacity-80'/>
                        </a>
                        <a href='https://www.linkedin.com/in/davide-lombardo-profile/' rel="noopener noreferrer" target="_blank">
                            <RiLinkedinBoxFill className='ml-4 w-8 h-8 fill-black hover:opacity-80'/>
                        </a>
                    </span>
                </div>
                <div className='flex justify-center lg:justify-end mt-20 mb-20'>
                    <img 
                        src={contactImg} 
                        alt="contactImg"
                        className='w-1/2 lg:w-1/3'        
                    />
                </div>
            </div>
        </section>
    )
}

export default Contact
