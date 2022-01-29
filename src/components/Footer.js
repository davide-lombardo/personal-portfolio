import { FaHands } from 'react-icons/fa'

const Footer = () => {
    return (
    <section className="hidden sm:block">
        <footer className="bg-sky-300 px-36 text-gray-800 h-44">
            <div className="container p-5 mx-auto flex justify-between sm:flex-row flex-col">
                <p className="text-sm font-medium">Fatto con il cuore e con le mie sante manine <FaHands className='inline h-6 w-6 mx-1 mb-2 text-gray-800'/></p>
            </div>
        </footer>
        <footer className="bg-blue-300 px-36 text-gray-400">
            <div className="container p-5 mx-auto flex justify-between sm:flex-row flex-col">
                <p className="text-sm font-medium"> Copyright © Davide Lombardo 2022</p>
            </div>
        </footer>
    </section>
    )
}

export default Footer
