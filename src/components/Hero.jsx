import React from 'react';
import vector1 from '../assets/vector1.png';

const Hero = ({ inprogress, resolved }) => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0'>
            <div className='flex flex-col md:flex-row justify-between items-stretch py-8 sm:py-12 md:py-16 gap-4 text-white text-base sm:text-lg md:text-xl max-w-7xl mx-auto' >
            <div
                className='flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 w-full rounded-xl min-h-45 sm:min-h-55'
                style={{
                    backgroundImage: `url(${vector1}), linear-gradient(to right, #632EE3, #9F62F2)`,
                    backgroundRepeat: 'no-repeat, no-repeat',
                    backgroundPosition: 'right center, center',
                    backgroundSize: 'auto 85%, cover',
                }}
            >
                <h2>In-Progress</h2>
                <h3 className='text-4xl sm:text-5xl'>{inprogress}</h3>
            </div>
            <div
                className='flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 w-full rounded-xl min-h-45 sm:min-h-55'
                style={{
                    backgroundImage: `url(${vector1}), linear-gradient(to right, #54CF68, #00827A)`,
                    backgroundRepeat: 'no-repeat, no-repeat',
                    backgroundPosition: 'right center, center',
                    backgroundSize: 'auto 85%, cover',
                }}
            >
                 <h2>Resolved</h2>
                <h3 className='text-4xl sm:text-5xl'>{resolved}</h3>
            </div>
        </div>
        </div>
    );
};

export default Hero;