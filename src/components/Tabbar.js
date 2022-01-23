
const Tabbar = () => {
    return (
        <section className="fixed bottom-0 right-0 sm-flex bg-white bg-opacity-0">
            <div className="flex flex-col justify-end p-4 md:p-12 md:hidden">
                <div className="mt-3 md:mt-0 md:ml-2 flex justify-end">
                    <a
                        className="contact-cta"
                        type="button"
                        href="#contact"
                    >
                        <span className="px-2">Contattami &nbsp; &gt;</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Tabbar
