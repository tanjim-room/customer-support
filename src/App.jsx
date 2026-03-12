import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticket from './components/Ticket'

function App() {
  const [inprogress, setInprogress]= useState(0);
  const [resolved, setResolved] = useState(0);
  const loadTickets = async () => {
        const res = await fetch('/customer.json');
        return res.json();
    }
  const ticketPromise = loadTickets();
  const [selectedTicket, setSelectedTicket] = useState([])
  const handleTicket = (ticket) => {
    setSelectedTicket([...selectedTicket,ticket])
    setInprogress(inprogress + 1);
    console.log("clicked")
  }

  const [resolvedTask, setResolvedTask] = useState([])
  const handleCompleteTask = (ticket) => {
        setResolvedTask([...resolvedTask, ticket])
        console.log("click complete");
        setSelectedTicket(selectedTicket.filter(t => t.id !== ticket.id));
        setResolved(resolved + 1);
        setInprogress(inprogress - 1)
    }
 

  return (
    <>
    <Navbar></Navbar>
    <Hero resolved={resolved} inprogress={inprogress}></Hero>
    <Suspense fallback={<p>Loading tickets...</p>}>
      <Ticket ticketPromise={ticketPromise} handleTicket={handleTicket} selectedTicket={selectedTicket} handleCompleteTask={handleCompleteTask} resolvedTask={resolvedTask}></Ticket>
    </Suspense>
    </>
  )
}

export default App
