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
import Interview_Hr1 from './Interview_Hr1';
import Add_Interview_Hr from './Add_Interview_Hr';
import Homee from './Home';
import TaskCompleted_Hr1 from './TaskCompleted_Hr';
import Requestt from './Request';
import AssessmentList1 from './AssessmentList1';
import Add_Assessment_Hr from './Add_Assessment_Hr';

function Home_Hr() {

    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);

    function Home() {
        setOpen7(false);
        setOpen6(false);
        setOpen5(false);
        setOpen4(false);
        setOpen3(false);
        setOpen2(false);
        setOpen1(true);
    }

    function TaskCompleted_Hr() {
        setOpen7(false);
        setOpen6(false);
        setOpen5(false);
        setOpen4(false);
        setOpen3(false);
        setOpen2(true);
        setOpen1(false);
    }

    function Interview_Hr() {
        setOpen7(false);
        setOpen6(false);
        setOpen5(false);
        setOpen4(false);
        setOpen3(true);
        setOpen2(false);
        setOpen1(false);
    }

    function AddInterview_Hr(){
        setOpen7(false);
        setOpen6(false);
        setOpen5(false);
        setOpen4(true);
        setOpen3(false);
        setOpen2(false);
        setOpen1(false);
    }

    function Assessment() {
        setOpen7(false);
        setOpen6(true);
        setOpen5(false);
        setOpen4(false);
        setOpen3(false);
        setOpen2(false);
        setOpen1(false);
    }

    function Request() {
        setOpen7(false);
        setOpen6(false);
        setOpen5(true);
        setOpen4(false);
        setOpen3(false);
        setOpen2(false);
        setOpen1(false);
    }  

    function AddAssessment_Hr() {
        setOpen7(true);
        setOpen6(false);
        setOpen5(false);
        setOpen4(false);
        setOpen3(false);
        setOpen2(false);
        setOpen1(false);
    }   
    
    return (
        <div className='flex flex-col md:flex-row'>
            <Card className="ml-8 text-center items-center h-[calc(50vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 mt-14">
                <List>
                    <ListItem>
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <p onClick={Home}>
                            Home
                        </p>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <ShoppingBagIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <p onClick={TaskCompleted_Hr}>
                            Tasks
                        </p>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <ShoppingBagIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <p onClick={Interview_Hr}>
                            Interviews
                        </p>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <ShoppingBagIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <p onClick={Assessment}>
                            Assessment
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
                {open1 && (<Homee Home={Home}/>)}

                {open2 && (<TaskCompleted_Hr1 TaskCompleted_Hr={TaskCompleted_Hr}/>)}

                {open3 && (<Interview_Hr1 AddInterview_Hr={AddInterview_Hr}/>)}

                {open4 && (<Add_Interview_Hr/>)}

                {open5 && (<Requestt Request={Request}/>)}

                {open6 && (<AssessmentList1 AddAssessment_Hr={AddAssessment_Hr}/>)}

                {open7 && (<Add_Assessment_Hr/>)}
            </div>
        </div>
    )
}

export default Home_Hr
