import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Quality_Logo from '../images/Quality_Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYelp, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4 items-center justify-center ">
                        <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                        <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out max-h-10 w-auto md:max-h-16 lg:max-h-20" src={Quality_Logo} />
                            <div className='text-md font-medium text-gray-600'>
                                <p>Denver, Colordao</p>
                                <p>email@gmail.com</p>
                                <p>999-999-9999</p>
                            </div>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                        </li>                            
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">OUR SERVICES</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Fencing</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Decks</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Interior Remodeling</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">And More!</Link>
                        </li>
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
                        <div className="text-xl mb-6">
                            Social Media Links.
                        </div>
                        <div className="flex my-4 w-2/3 lg:w-1/2">

<div className="social-links flex space-x-2">
    <button className="rounded-full bg-white w-10 h-8 flex items-center justify-center">
        <a 
            href="https://www.facebook.com/100094226190763" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center"
        >
            <FontAwesomeIcon icon={faFacebookF} className="text-blue-900" />
        </a>
    </button>

    <button className="rounded-full bg-white w-10 h-8 flex items-center justify-center">
        <a 
            href="https://www.yelp.com/biz/overall-quality-contracting-denver" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center"
        >
            <FontAwesomeIcon icon={faYelp} className="text-blue-900" />
        </a>
    </button>

    <button className="rounded-full bg-white w-10 h-8 flex items-center justify-center">
        <a 
            href="https://www.instagram.com/Overall_Quality_Contracting/?fbclid=IwAR3UFNiOFyjfTmANSpiVkNfZDNHm45XEVKbA-7AVUm5wJhI56MlibzYvGdU" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center"
        >
            <FontAwesomeIcon icon={faInstagram} className="text-blue-900" />
        </a>
    </button>
</div>
</div>
                    </div>          

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-200 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink
                        to="#"
                        className=" hover:text-gray-900"
                    >
                        Overall Quality Construction
                    </HashLink>. <br /> All rights reserved.
                    </div>
                </div>
                </div>

                </div>
                
            </footer>
        </>
    )
}
export default Footer;
