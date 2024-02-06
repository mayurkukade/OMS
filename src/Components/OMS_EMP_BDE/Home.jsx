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
import Task2 from './Task2';
import Request3 from './Request3';
import Home1 from './Home1';

function Home() {

    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    function HomeBDE() {
        setOpen3(false);
        setOpen2(false);
        setOpen1(true);
    }

    function Tasks() {
        setOpen1(false);
        setOpen3(false);
        setOpen2(true);
    }

    function Request() {
        setOpen2(false);
        setOpen1(false);
        setOpen3(true);
    }

    return (
        <div className='flex flex-col md:flex-row'>
            <Card className="h-[calc(30vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 mt-14">
                <List>
                    <ListItem>
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <p onClick={HomeBDE}>
                            Home
                        </p>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <ShoppingBagIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <p onClick={Tasks}>
                            Tasks
                        </p>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <p onClick={Request}>
                            Requests
                        </p>
                    </ListItem>
                </List>
            </Card>

            <div>
                {open1 && (<Home1 HomeBDE={HomeBDE}/>)}

                {open2 && (<Task2 Tasks={Tasks}/>)}

                {open3 && (<Request3 Request={Request}/>)}
            </div>
        </div>
    )
}

export default Home
