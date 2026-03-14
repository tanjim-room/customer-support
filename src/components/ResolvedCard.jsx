import React from 'react';

const ResolvedCard = ({ticket}) => {
    return (
        <div className="card w-full bg-white shadow-sm">
            <div className="card-body p-4 sm:p-5">
               <h2 className='font-bold text-base sm:text-lg wrap-break-word'>{ticket.title}</h2>
               
            </div>
        </div>
    );
};

export default ResolvedCard;