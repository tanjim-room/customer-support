import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { SiMinutemailer } from "react-icons/si";

import React from 'react';


const Footer = () => {
    return (
       <div className='bg-black'>
         <div className='max-w-7xl mx-auto mt-24'>
             <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <nav>
                <h6 className="footer-title">CS — Ticket System</h6>
                <p>The CS Ticket System is a web-based  application <br />designed to efficiently manage 
                 and track customer <br /> support requests. 
                 The system allows users to create <br />  support  tickets for technical issues, service 
                 requests, <br />  or inquiries, while administrators 
                  or support agents <br /> can monitor, update, and resolve 
                  those tickets in <br /> an organized workflow.</p>
                
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Our Mission</a>
                <a className="link link-hover">Contact Saled</a>
               
            </nav>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Products & Services</a>
                <a className="link link-hover">Customer Storiesy</a>
                <a className="link link-hover">Download Apps</a>
            </nav>
            <nav>
                <h6 className="footer-title">Information</h6>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Terms & Conditions</a>
                <a className="link link-hover">Join Us</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social Links</h6>
                <a className="link link-hover flex gap-2"> <FaSquareXTwitter></FaSquareXTwitter> @CS — Ticket System</a>
                <a className="link link-hover flex gap-2"><FaLinkedin></FaLinkedin> @CS — Ticket System</a>
                <a className="link link-hover flex gap-2"><FaFacebookSquare></FaFacebookSquare> @CS — Ticket System</a>
                <a className="link link-hover flex gap-2"><SiMinutemailer></SiMinutemailer> support@cs-ticketsystem.com</a>
            </nav>

            
        </footer>
         <div className="border-t border-gray-300 opacity-50 mx-10"></div>
        </div>
        
       </div>
       
    );
};

export default Footer;