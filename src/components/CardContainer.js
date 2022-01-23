import { SiGithub } from 'react-icons/si'

const CardContainer = () => {
    return (
    <>
        <div>
            <h1 className="secondary-title mt-44 ml-20 text-gray-900">I miei progetti</h1>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mx-20 z-10" id="projects">
            <div data-aos="flip-left" data-aos-duration="2000" className="card">
                <img
                    src="https://images.unsplash.com/photo-1559116315-702b0b4774ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1366&q=80"
                    alt=""
                    className="h-full object-cover"
                />
                <div className="badge">
                    <SiGithub className='text-2xl'/>
                </div>
            </div>
            <div data-aos="flip-right" data-aos-duration="2000" className="card">
                <img
                    src="https://images.unsplash.com/photo-1559116315-702b0b4774ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1366&q=80"
                    alt=""
                    className="h-full object-cover"
                />
                <div className="badge">
                    <SiGithub className='text-2xl'/>
                </div>
            </div>
            <div data-aos="flip-left" data-aos-duration="2000" className="card">
                <img
                    src="https://images.unsplash.com/photo-1559116315-702b0b4774ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1366&q=80"
                    alt=""
                    className="h-full object-cover"
                />
                <div className="badge">
                    <SiGithub className='text-2xl'/>
                </div>
            </div>
        </section>
    </>
    )
}

export default CardContainer

