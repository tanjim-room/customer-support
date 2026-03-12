import React from 'react';
import vector1 from '../assets/vector1.png';

const Hero = ({ inprogress, resolved }) => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center py-16 gap-4 text-white text-xl max-w-7xl mx-auto' >
            <div
                className='flex flex-col items-center justify-center p-16 w-full rounded-xl'
                style={{
                    backgroundImage: `url(${vector1}), linear-gradient(to right, #632EE3, #9F62F2)`,
                    backgroundRepeat: 'no-repeat, no-repeat',
                    backgroundPosition: 'right center, center',
                    backgroundSize: 'auto 90%, cover',
                }}
            >
                <h2>In-Progress</h2>
                <h3 className='text-5xl'>{inprogress}</h3>
            </div>
            <div
                className='flex flex-col items-center justify-center p-16 w-full rounded-xl'
                style={{
                    backgroundImage: `url(${vector1}), linear-gradient(to right, #54CF68, #00827A)`,
                    backgroundRepeat: 'no-repeat, no-repeat',
                    backgroundPosition: 'right center, center',
                    backgroundSize: 'auto 90%, cover',
                }}
            >
                 <h2>Resolved</h2>
                <h3 className='text-5xl'>{resolved}</h3>
            </div>
        </div>
        </div>
    );
};

export default Hero;