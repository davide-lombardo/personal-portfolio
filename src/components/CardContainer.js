import bookSearchThumb from '../img/bookSearchThumb.webp';
import fakeShopThumb from '../img/fakeShopThumb.webp';

import Card from "./Card";


const CardContainer = () => {

    return (
    <>
        <div>
            <h1 id="projects" className="secondary-title mt-44 ml-20 text-gray-900">I miei progetti</h1>
        </div>
       
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 mx-20 z-10">
            <Card 
                thumbnail={fakeShopThumb}
                title="Fake Shop"
                description="Ricerca un prodotto e mettilo nel carrello."
                githubUrl="https://github.com/davide-lombardo/fake-shop"
                demoUrl="https://e-app-8e18f.web.app/"
                filter1="React"
                filter2="Redux"
            />
            <Card 
                thumbnail={bookSearchThumb}
                title="Book Finder"
                description="Ricerca qualsiasi libro che ti viene in mente."
                githubUrl="https://github.com/davide-lombardo/book-finder"
                demoUrl="https://bookfindersite.netlify.app/"
                filter1="React"
                filter2="Redux"
            />
            <Card 
                thumbnail="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
                title="Job Hunting"
                description="Visualizza e filtra le offerte di lavoro."
                githubUrl="https://github.com/davide-lombardo/job-search-app"
                demoUrl="https://job-hunting-e440e.web.app/job-list"
                filter1="Angular"
                filter2="Tailwind"
            />
        </section>
    </>
    )
}

export default CardContainer

