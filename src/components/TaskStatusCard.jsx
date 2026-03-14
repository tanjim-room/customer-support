import React from 'react';

const TaskStatusCard = ({ticket, handleCompleteTask}) => {
    
    return (
        <div className="card w-full bg-white shadow-sm">
            <div className="card-body p-4 sm:p-5">
               <h2 className='font-bold text-base sm:text-lg wrap-break-word'>{ticket.title}</h2>
                <div className="mt-4 sm:mt-6">
                    <button onClick={() => handleCompleteTask(ticket)} className="bg-[#02A53B] w-full px-4 py-2.5 text-white font-semibold rounded-lg">Complete</button>
                </div>
            </div>
        </div>
    );
};

export default TaskStatusCard;