import React, { useState, useEffect } from 'react';
import './Clients.css';
import Unknown from '../images/unknown_user.jpeg';
import Sauna from '../images/Quality_Sauna.jpeg';
import Ramp from '../images/Quality_Ramp.jpeg';
import Bathroom from '../images/Quality_Bathroom.jpeg';
import Hottub_2 from '../images/Quality_Hottub_2.jpeg';

const testimonialsData = [
    {
        projectImage: Sauna,
        customerImage: Unknown,
        quote: 'Amazing work! Truly one of a kind service.'
    },
    {
        projectImage: Ramp,
        customerImage: Unknown,
        quote: 'These guys are great'
    },
    {
        projectImage: Bathroom,
        customerImage: Unknown,
        quote: 'More nice words'
    },
    {
        projectImage: Hottub_2,
        customerImage: Unknown,
        quote: 'These guys were great to work with!'
    },
];

const Clients = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % testimonialsData.length);
        }, 10000); // 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mt-8 bg-gray-100 p-2 md:p-12 h-5/6">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Clients</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Testimonials from our satisfied customers.</h2>
                    <p>NOTE - I'd love to do a before/after here instead of just the final picture</p>
                </div>
                <div className="testimonials-container">
                    <div className="carousel">
                        <img
                            src={testimonialsData[currentIndex].projectImage}
                            alt="Project"
                            className="project-image"
                        />
                        <div className="customer-feedback">
                            <img
                                src={testimonialsData[currentIndex].customerImage}
                                alt="Customer"
                                className="customer-image"
                            />
                            <blockquote>
                                <span className="quote-mark">“</span>
                                {testimonialsData[currentIndex].quote}
                                <span className="quote-mark">”</span>
                            </blockquote>
                        </div>
                        <div className="flex justify-between space-x-4">
                            <button
                                onClick={() => setCurrentIndex((currentIndex - 1 + testimonialsData.length) % testimonialsData.length)}
                                className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-3/10 px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                Previous
                            </button>

                            <button
                                onClick={() => setCurrentIndex((currentIndex + 1) % testimonialsData.length)}
                                className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-3/10 px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Clients;