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
        <div className="navbar max-w-7xl mx-auto shadow-sm text-black">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl font-semibold">CS — Ticket System</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks.map((link, index) => <li key ={index}><a>{link.name}</a></li>)
                    }
                </ul>
            </div>
            <div className='ml-4'>
                <button className="btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">+ New Ticket</button>
            </div>
        </div>
    ); 
};

export default Navbar;