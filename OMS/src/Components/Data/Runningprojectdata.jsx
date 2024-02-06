
import { MdDelete ,MdEdit} from "react-icons/md";

export const TABLE_HEAD = ["Project", "Client Name", "Start Date", " End Date"," Duration","Action"];
 
export const TABLE_ROWS = [
  {
    project: "John Michael",
    clientName: "Manager",
    startDate: "23/04/18",
    endDate: "23/04/18",
    duration: "23/04/18",
    action: <div className="flex"><MdEdit className="w-5 h-5"/><MdDelete className="ml-5 w-5 h-5" /></div>,
 },
  
];