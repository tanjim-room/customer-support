import React from 'react';
import bg from '../assets/vector1.png';

const Hero = ({ inprogress, resolved }) => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center py-16 gap-4 text-white text-xl max-w-7xl mx-auto' >
            <div className='flex flex-col items-center justify-center  p-16 w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-xl bg-opacity-50'>
                <h2>In-Progress</h2>
                <h3 className='text-5xl'>{inprogress}</h3>
            </div>
            <div className='flex flex-col items-center justify-center  p-16 w-full bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-xl'>
                 <h2>Resolved</h2>
                <h3 className='text-5xl'>{resolved}</h3>
            </div>
        </div>
        </div>
    );
};

export default Hero;