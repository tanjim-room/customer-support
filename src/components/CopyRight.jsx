import React from 'react';

const CopyRight = () => {
    return (
        <footer className="bg-black text-white py-6 ">
            <aside className="flex items-center justify-center">
                
                <p className='text-center'>© {new Date().getFullYear()} CS — Ticket System. All rights reserved.</p>
            </aside>
         
        </footer>
    );
};

export default CopyRight;