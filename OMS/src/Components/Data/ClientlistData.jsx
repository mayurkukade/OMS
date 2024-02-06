
import { MdDelete ,MdEdit} from "react-icons/md";

export const TABLE_HEAD = ["Profile","Name", "Number", "Email", "Company","Address","Service/Product","Status","Action"];
 
export const TABLE_ROWS = [
  {
    Profile : "img",
    name: "John Michael",
    Number: "12345",
    Email: "abc@gamil.com",
    Company: "XYZ",
    Address: "Pune",
    ServiceProduct: "Active",
    Status: "Progress",
    Action: <div className="flex"><MdEdit className="w-5 h-5"/><MdDelete className="ml-5 w-5 h-5" /></div>,
  },
  {
    Profile : "img",
    name: "John Michael",
    Number: "12345",
    Email: "abc@gamil.com",
    Company: "XYZ",
    Address: "Pune",
    ServiceProduct: "Active",
    Status: "Progress",
    Action: <div className="flex"><MdEdit className="w-5 h-5"/><MdDelete className="ml-5 w-5 h-5" /></div>,
  },
];