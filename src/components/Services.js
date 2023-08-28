import React from 'react';
import Quality_Deck from '../images/Quality_Deck.jpeg'; 
import Quality_Kitchen from '../images/Quality_Kitchen.jpeg';
import Quality_Fence from '../images/Quality_Fence.jpeg';
import Quality_Other from '../images/Quality_Other.jpeg'

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to ensuring our customers receive the highest quailty of work.</h2>
                        <p className = "font-bold bg-red-500 text-white">I plan on making each of these clickable with more information with images of previous projects in each category. </p>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={Quality_Deck} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Decks</h2>
                                    <p className="text-md font-medium">
                                        We specialize in creating high-quality, custom decks for your home. No matter the size of the project, we can build it! 
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={Quality_Fence} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Fencing</h2>
                                    <p className="text-md font-medium">
                                        Secure your yard with a beautiful fence that is built to last.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={Quality_Kitchen} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Interior Remodeling</h2>
                                    <p className="text-md font-medium">
                                        We can elevate your indoor living space by remodeling your bathroom, kitchen, and more!
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={Quality_Other} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Home Projects</h2>
                                    <p className="text-md font-medium">
                                        Our team can help you take your home project dreams and turn them into reality!
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            {/* <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'></svg>
                            </div> */}
                            <h3 className="text-3xl  text-blue-900 font-bold"><span className='font-black'>Build</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                    Some sort of mission statement about why your company focuses on home projects. Something personal or what drives you would be great here
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            {/* <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'></svg>
                            </div> */}
                            <h3 className="text-3xl  text-blue-900 font-bold"><span className='font-black'>Quality</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>This would be a great spot to broadly address the questions about warranty of your products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;