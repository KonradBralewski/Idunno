import React from "react";
import profile from "Assets/profile.png"
import messages from "Assets/messages.png"
import board from "Assets/board.png"
import plus from "Assets/plus.png"
import SidebarItem from "./SidebarItem";
import { Outlet, useNavigate } from "react-router-dom";
import { navToUrl } from "Helpers/NavHelpers";


export default function HBSidebar(){

    const navigate = useNavigate()

    return(
        <div>
            <nav className="fixed top-2 left-0 flex flex-col">
                <SidebarItem text="Board" img={board} handleClick={()=>{navToUrl(navigate, "/Idunno")}}/>
                <SidebarItem text="Profile" img={profile} handleClick={()=>navToUrl(navigate, "/Profile")}/>
                <SidebarItem text="Messages" img={messages} handleClick={()=>navToUrl(navigate, "/Messages")}/>
                <SidebarItem text="Add new" img={plus} handleClick={()=>navToUrl(navigate, "/Add")}/>
            </nav>
            <Outlet/>
        </div>
    )
}