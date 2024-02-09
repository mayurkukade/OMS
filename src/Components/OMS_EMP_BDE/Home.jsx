import { useState } from 'react';
import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    InboxIcon,
} from "@heroicons/react/24/solid";
import HomeBDE from './HomeBDE';
import TaskBDE from './TaskBDE';
import RequestBDE from './RequestBDE';


function Homee() {

    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    function HomeBDE1() {
        setOpen3(false);
        setOpen2(false);
        setOpen1(true);
    }

    function TasksBDE1() {
        setOpen1(false);
        setOpen3(false);
        setOpen2(true);
    }

    function RequestBDE1() {
        setOpen2(false);
        setOpen1(false);
        setOpen3(true);
    }

    return (
        <div className='flex flex-col md:flex-row '>
            <Card className="h-[calc(30vh-2rem)] md:ml-0 ml-20 w-full max-w-[15rem] p-4 shadow-xl shadow-blue-gray-900/5 mt-14">
                <List>
                    <ListItem>
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <p onClick={HomeBDE1}>
                            Home
                        </p>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <ShoppingBagIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <p onClick={TasksBDE1}>
                            Tasks
                        </p>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <p onClick={RequestBDE1}>
                            Requests
                        </p>
                    </ListItem>
                </List>
            </Card>

            <div>
                {open1 && (<HomeBDE HomeBDE={HomeBDE1}/>)}

                {open2 && (<TaskBDE TaskBDE={TasksBDE1}/>)}

                {open3 && (<RequestBDE RequestBDE={RequestBDE1}/>)}
            </div>
        </div>
    )
}

export default Homee
