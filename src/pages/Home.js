import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';


const Home = () => {
    return (
        <>
            <Hero />
            <p className = "font-bold bg-red-500 text-white">Hey guys! Here is my first draft of your site. It is still a work in progress. For example, you'll find that some buttons don't work yet, I want to get a gallery of work going. The email service is not yet set up. Everything can change, but I wanted to put something in front of you so you can see a possible outline of the site.</p>
            <p className = "font-bold bg-red-500 text-white">The url will not include the github aspect once we get it ironed out. I'm using a site that makes hosting live websites easy to edit until we reach a nice finished product.</p>

            <Intro />
            <Services />
            {/* <Portfolio /> */}
            <Clients />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

