import React, { useState } from 'react';

const TaskStatusCard = ({ticket, handleCompleteTask}) => {
    
    return (
        <div className="card w-96 bg-white shadow-sm">
            <div className="card-body">
               <h2 className='font-bold text-lg'>{ticket.title}</h2>
                <div className="mt-6">
                    <button onClick={() => handleCompleteTask(ticket)} className="bg-[#02A53B] btn-block px-4 py-2 text-white font-semibold">Complete</button>
                </div>
            </div>
        </div>
    );
};

export default TaskStatusCard;