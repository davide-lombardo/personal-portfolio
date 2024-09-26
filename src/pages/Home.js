import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tabbar from '../components/Tabbar'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import CardContainer from '../components/CardContainer'
import Skills from '../components/Skills'


const Home = () => {

    AOS.init({
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

  
    return (
        <>
            <Navbar />
                <div className='grid grid-cols-1 min-h-screen'> 
                    <main className='grid md:grid-cols-12'>
                        <aside className="md:col-span-1 "></aside>
                        <article className="md:col-span-10">
                            <Hero/>
                            <Skills/>
                            <CardContainer />
                            <Contact/>
                        </article>
                        <aside className="md:col-span-1"></aside>
                        <Tabbar />
                    </main>
                </div>
            <Footer />  
        </>
    )
}

export default Home
