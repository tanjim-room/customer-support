import { CalendarIcon } from "lucide-react";

const TicketCard = ({ ticket, onClick }) => {
  return (
    <div className={`bg-white rounded-xl p-5 shadow-sm flex flex-col gap-3`} onClick={onClick}>
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">{ticket.title}</h2>
        <div className={`${ticket.status === "Open" ? "bg-green-100 text-green-700" : ticket.status === "In Progress" ? "bg-yellow-100 text-yellow-700" : ticket.status === "Pending" ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"} px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 whitespace-nowrap shrink-0 ml-2`}>
          <span className={`w-2 h-2 ${ticket.status === "Open" ? "bg-green-500" : ticket.status === "In Progress" ? "bg-yellow-500" : ticket.status === "Pending" ? "bg-blue-500" : "bg-red-500"} rounded-full inline-block`}></span>
          {ticket.status}
        </div>
      </div>

      <p className="text-gray-500 text-sm line-clamp-2">{ticket.description}</p>

      <div className="flex justify-between items-center gap-3 text-sm">
        <div className="flex gap-2 items-center">
            <span className="text-gray-500">#{ticket.id.replace("TIC-", "")}</span>
        <span className={`${ticket.priority === "Critical" || ticket.priority === "High" ? "text-red-500" : ticket.priority === "Medium" ? "text-yellow-600" : "text-green-600"} font-semibold uppercase`}>{ticket.priority} Priority</span>
        </div>
        <div className="flex gap-2 items-center">
            <span className="text-gray-600">{ticket.customer}</span>
        <span className="flex items-center gap-1 text-gray-500">
        <CalendarIcon size="16"></CalendarIcon> {new Date(ticket.createdAt).toLocaleDateString()}
        </span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;