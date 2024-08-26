import Addtodofrom from "./Addtodoform"
import Todolist from "./Todolist"
import { useState } from "react"

function Todocontainer() {
    const [activityArr, setactivityArr] = useState([
        {
            id: 1,
            activity: "Go for a Walk"
        },
        {
            id: 2,
            activity: "Have a breakfast"
        },
        {
            id: 3,
            activity: "Take a shower"
        }
    ])
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <Addtodofrom activityArr={activityArr} setactivityArr={setactivityArr}/>
                <Todolist  activityArr={activityArr} setactivityArr={setactivityArr}/>
               
            </div>
        </div>
    )
}
export default Todocontainer