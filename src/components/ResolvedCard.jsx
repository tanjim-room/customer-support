import React from 'react';

const ResolvedCard = ({ticket}) => {
    return (
        <div className="card w-96 bg-white shadow-sm">
            <div className="card-body">
               <h2 className='font-bold text-lg'>{ticket.title}</h2>
               
            </div>
        </div>
    );
};

export default ResolvedCard;