const ProjectDetail = () => { 
    return (
        <>
        <Navbar />
        <div className='grid grid-cols-1 min-h-screen'> 
            <main className='grid md:grid-cols-12'>
                <aside className="md:col-span-1 bg-white"></aside>
                <article className="md:col-span-10">
                       
                </article>
                <aside className="md:col-span-1 bg-white"></aside>
            </main>
        </div>
        <Footer />  
        </>
    )
}

export default ProjectDetail