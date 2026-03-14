import React from 'react';

const Navbar = () => {
    const navLinks = [
        { name: 'Home', href: '#'},
        { name: 'FAQ', href: '#'},
        { name: 'Changelog', href: '#'},
        { name: 'Blog', href: '#'},
        { name: 'Download', href: '#'},
        { name: 'Contact', href: '#'},

    ]
    return (
        <div className="navbar max-w-7xl mx-auto shadow-sm text-black px-4 sm:px-6 lg:px-0">
            <div className="flex-1">
                <a className="btn btn-ghost text-base sm:text-xl font-bold px-2 sm:px-4">CS — Ticket System</a>
            </div>
            <div className="flex-none hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks.map((link, index) => <li key ={index}><a>{link.name}</a></li>)
                    }
                </ul>
            </div>
            <div className="dropdown dropdown-end lg:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-44 p-2 shadow">
                    {
                        navLinks.map((link, index) => <li key={index}><a>{link.name}</a></li>)
                    }
                </ul>
            </div>
            <div className='ml-2 sm:ml-4'>
                <button className="btn btn-primary bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-xs sm:text-sm">+ New Ticket</button>
            </div>
        </div>
    ); 
};

export default Navbar;