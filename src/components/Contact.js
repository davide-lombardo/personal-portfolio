import { useState } from 'react'
import emailjs from 'emailjs-com'

import contactImg from '../img/contactImg.png'
import { VscError } from 'react-icons/vsc'

import classNames from 'classnames';


const Contact = () => {
    const [ error, setError ] = useState('')
    const [ IsItemRemoved, setIsItemRemoved ] = useState(false)

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

            emailjs.sendForm('default_service', 'template_8sf33ta', formState.current, process.env.REACT_APP_EMAILJS_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.error(error.text);
            });
        } catch {
            setError('Oops, Invio non riuscito')
        }
        setFormState({email: '', name: '', message: ''})
    };

    return (
        <section className="text-gray-900 mt-44 min-w-full flex flex-col md:flex-row" id='contact'>
            <div className="pb-16 px-20">
                <div className="mb-10">
                    <h1 className="secondary-title">Vuoi parlare con me?</h1>
                    <p className="lg:w-2/3 leading-relaxed text-base font-light">Ottima scelta, rispondo dopo i pasti.</p>
                </div>
            
                <div className="lg:w-1/2 md:w-2/3">
                    <div className="flex flex-wrap -m-2">
                        <form onSubmit={handleSubmit} className='flex flex-col'>
                            <div className="p-1 w-full">
                            {
                                error && 
                                <div className={classNames(["bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 relative" 
                                    + (IsItemRemoved ? " hidden" : " flex")])}
                                >
                                    {error}
                                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                        <VscError onClick={() => setIsItemRemoved(!IsItemRemoved)} className='cursor-pointer hover:opacity-50 fill-current h-6 w-6 text-red-500'/>
                                    </span>
                                </div>
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
                                <button type='submit' className="flex mx-auto text-white bg-sky-300 border-0 py-2 px-8 focus:outline-none hover:bg-sky-100 rounded text-lg">Invia</button>
                            </div>
                        </form>
                        <div className="p-4 w-full pt-8 mt-8 border-t border-gray-200 text-start ml-24">
                            <span className="inline-flex ml-2">
                                <a href='https://www.facebook.com/davide.lombardo.10' rel="noopener noreferrer" target="_blank">
                                    <svg className='w-6 fill-orange-300 hover:fill-orange-100' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a href='https://www.instagram.com/dave.lombardo/' rel="noopener noreferrer" target="_blank" className="ml-3">
                                    <svg className='w-6 stroke-orange-300 hover:stroke-orange-100' fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a href='https://www.linkedin.com/in/davide-lombardo-profile/' rel="noopener noreferrer" target="_blank" className="ml-3">
                                    <svg className='w-6 fill-orange-300 hover:fill-orange-100'  strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1500" className='flex justify-center lg:justify-end mt-20'>
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
