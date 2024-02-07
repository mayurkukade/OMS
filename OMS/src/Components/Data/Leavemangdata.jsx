
import { MdDelete ,MdEdit} from "react-icons/md";

export const TABLE_HEAD = ["No", "Name", "Leave on", "Leave till" , "Reason" , "Document submitted" ,"Action"];
 
export const TABLE_ROWS = [
  {
    no: "1",
    name: "XYZ",
    leaveon: "23/04/18",
    leavetill: "23/04/18",
    reason: "ABC",
    documentsubmitted: "ABC",
    action: <div className="flex"><MdEdit className="w-5 h-5"/><MdDelete className="ml-5 w-5 h-5" /></div>,
  },
  
];