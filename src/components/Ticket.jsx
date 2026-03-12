import React, { use } from 'react';
import TicketCard from './TicketCard';
import TaskStatusCard from './TaskStatusCard';
import ResolvedCard from './ResolvedCard';

const Ticket = ({ticketPromise, handleTicket, selectedTicket, handleCompleteTask, resolvedTask}) => {
  
   const tickets = use(ticketPromise);
    
    return (
        <div className='max-w-7xl mx-auto text-black'>
            <div className='flex justify-between gap-4'>
                <div className='w-2/3'>
                    <h2 className='text-2xl font-semibold mb-4'>Customer Tickets</h2>
                  
                        <div className='grid grid-cols-2 gap-4'>
                        {
                            tickets.map((ticket, index) => <TicketCard key={index} ticket={ticket} onClick={() => handleTicket(ticket)} />)
                        }
                     
                    </div>
                </div>
                <div className='w-1/3'>
                    <div>
                        <h2 className='text-xl font-semibold mb-8'>Ticket Status</h2>
                     <div className='flex flex-col gap-4'>
                        {
                       selectedTicket.length >0 && selectedTicket.map((ticket, index) => <TaskStatusCard key={index} ticket={ticket} handleCompleteTask={handleCompleteTask}></TaskStatusCard>)
                     }
                     </div>
                    </div>
                    <div className='mt-24'>
                         <h2 className='text-xl font-semibold mb-8'>Resolved Task</h2>
                         <div className='flex flex-col gap-4'>
                            {
                                resolvedTask.length >0 && resolvedTask.map((ticket, index) => <ResolvedCard key={index} ticket={ticket}></ResolvedCard>)
                            }
                         
                         </div>
                    </div>
                <div>
                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;