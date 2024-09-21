import React, { useState } from 'react';
import images from '../../assets/images.png';
import { FaCartPlus, FaBars, FaTimes } from 'react-icons/fa';
import Hero from '../Hero/Hero';
import Recipe from '../Recipe/Recipe';
import Product from '../Product/Product';
import About from '../About/About';
import Order from '../Order/Order';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const [currentView, setCurrentView] = useState('home');
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleClick = (view) => {
        setCurrentView(view);
        setIsNavbarOpen(false); 
    };

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <>
            <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 shadow-md">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    <a href="#" className="flex items-center space-x-2 text-2xl font-bold text-white">
                        <img
                            src={images}
                            alt="foodies"
                            className="w-24 sm:w-32 rounded-xl"
                        />
                    </a>

                    <button 
                        onClick={toggleNavbar} 
                        className="sm:hidden text-3xl text-white"
                    >
                        {isNavbarOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    <div className={`fixed inset-0 bg-pink-100 z-50 transform transition-transform ${isNavbarOpen ? 'translate-x-0' : 'translate-x-full'} sm:relative sm:flex sm:items-center sm:space-x-6 sm:bg-transparent sm:transform-none sm:translate-x-0`}>
                        <ul className="flex flex-col sm:flex-row sm:space-x-6 text-center sm:text-left mt-16 sm:mt-0">
                            <li>
                                <button
                                    onClick={() => handleClick('home')}
                                    className="block py-3 px-6 text-lg font-semibold text-gray-800 hover:text-purple-500"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleClick('recipe')}
                                    className="block py-3 px-6 text-lg font-semibold text-gray-800 hover:text-purple-500"
                                >
                                    Recipes
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleClick('product')}
                                    className="block py-3 px-6 text-lg font-semibold text-gray-800 hover:text-purple-500"
                                >
                                    Products
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleClick('about')}
                                    className="block py-3 px-6 text-lg font-semibold text-gray-800 hover:text-purple-500"
                                >
                                    About
                                </button>
                            </li>
                        </ul>
                        <button
                            onClick={() => handleClick('Order')}
                            className=" block mt-4 sm:mt-0 mx-auto sm:mx-0 bg-gradient-to-r from-sky-200 to-red-100 text-pink-950 px-4 py-2 rounded-md flex items-center gap-2 hover:scale-105 transition-transform"
                        >
                            Order Now
                            <FaCartPlus className="text-xl text-blue-900" />
                        </button>
                    </div>
                </div>
            </div>

            {currentView === 'home' && <Hero />}
            {currentView === 'recipe' && <Recipe />}
            {currentView === 'product' && <Product />}
            {currentView === 'about' && <About />}
            {currentView === 'Order' && <Order />}

            <footer className="bg-blue-200 text-cyan-950 py-6">
                <div className="container mx-auto px-4 flex flex-col items-center text-center">
                    <div className="mb-4">
                        <p className="text-xl font-bold">Contact Us</p>
                        <p className="text-base">Sweet Sprinkle Lahore, Pakistan</p>
                        <p className="text-base">Email: Mahaikkhalil9@gmail.com</p>
                        <p className="text-base">Phone: (+92) 321 4775535</p>
                    </div>
                    <div className="mb-4 flex space-x-4">
                        <a href="https://facebook.com" className="text-emerald-950 text-2xl" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://instagram.com" className="text-emerald-950 text-2xl" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://twitter.com" className="text-emerald-950 text-2xl" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.linkedin.com/in/mahaik-khalil-b9614323a/" className="text-emerald-950 text-2xl" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        
                    </div>
                    <div>
                        <p className="text-sm">&copy; 2024 Sweet Sprinkles. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Navbar;
