import React from 'react'
import { FaFacebookF,  FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="text-gray-600 px-4 sm:px-10 lg:px-32 pt-12 border-t border-neutral-300 pb-8 w-screen bg-transparent relative">
            <div className="container px-5 pt-12 pb-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg> */}
                        <span className="ml-3 text-xl">Webtech</span>
                    </a>
                    <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                </div>
                <div className="flex-grow flex flex-wrap items-center justify-end md:pl-20 -mb-10 md:mt-0 mt-10 text-left">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font text-lg font-semibold text-gray-900 mb-4">Getting started</h2>
                        <nav className="list-none mb-10 gap-y-2 flex flex-col">
                            <li>
                                <a className="text-gray-600 hover:text-indigo-600 transition-transform duration-300 ease-in-out cursor-pointer text-base">Installation</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-indigo-600 transition-transform duration-300 ease-in-out cursor-pointer text-base">Upgrade Guide</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-indigo-600 transition-transform duration-300 ease-in-out cursor-pointer text-base">Editors Support</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-indigo-600 transition-transform duration-300 ease-in-out cursor-pointer text-base">Release Notes</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font text-lg font-semibold text-gray-900 mb-4">Explore</h2>
                        <nav className="list-none mb-10 gap-y-2 flex flex-col">
                            <li>
                                <a className="text-gray-600 hover:text-indigo-600 transition-transform duration-300 ease-in-out cursor-pointer text-base ">Categories</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-indigo-600 transition-transform duration-300 ease-in-out cursor-pointer text-base">Profile</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-indigo-600 transition-transform duration-300 ease-in-out cursor-pointer text-base">Authors</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-indigo-600 transition-transform duration-300 ease-in-out cursor-pointer text-base">Pricing</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font text-lg font-semibold text-gray-900 mb-4">Resources</h2>
                        <nav className="list-none mb-10 gap-y-2 flex flex-col">
                            <li>
                                <a className="text-gray-600 hover:text-indigo-600 transition-transform duration-300 ease-in-out cursor-pointer text-base ">Developers</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-indigo-600 transition-transform duration-300 ease-in-out cursor-pointer text-base">Support</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-indigo-600 transition-transform duration-300 ease-in-out cursor-pointer text-base">Blog</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-indigo-600 transition-transform duration-300 ease-in-out cursor-pointer text-base">Products</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 Webtech —
                        <a href="#" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@shreyas</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-4">
                        <a className="text-gray-500 cursor-pointer hover:text-indigo-600">
                            <FaFacebookF />
                        </a>
                        <a className="text-gray-500 cursor-pointer hover:text-indigo-600">
                            <FaTwitter />
                        </a>
                        <a className="text-gray-500 cursor-pointer hover:text-indigo-600">
                            <FaLinkedinIn />
                        </a>
                        <a className="text-gray-500 cursor-pointer hover:text-indigo-600">
                            <FaInstagram />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
