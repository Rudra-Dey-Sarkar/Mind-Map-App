import React, { useState } from 'react'
import "./Sidenav.css"
import {  HamBurger, LeftArrow ,ExploreChats, BusinessLeads, MindMap, ManageTeams, ConfigureChatbot } from "../Icons/Icons"

function Sidenav() {
    const [SideNavOpen, setSideNavOpen] = useState(false);
    function NavOpenClose(){
        if (SideNavOpen === false) {
            document.getElementById("text1").style.display = "flex";
            document.getElementById("text2").style.display = "flex";
            document.getElementById("text3").style.display = "flex";
            document.getElementById("text4").style.display = "flex";
            document.getElementById("text5").style.display = "flex";
            
            document.getElementById("hamburger").style.display = "none";
            document.getElementById("leftarrow").style.display = "flex";
            setSideNavOpen(true);
        } else {
            if(window.innerWidth<=600){
                document.getElementById("SidenavBody").style.display="none";
                document.getElementById("hamburgerTop").style.display = "flex"
            }else{
                document.getElementById("text1").style.display = "none";
                document.getElementById("text2").style.display = "none";
                document.getElementById("text3").style.display = "none";
                document.getElementById("text4").style.display = "none";
                document.getElementById("text5").style.display = "none";
    
                document.getElementById("hamburger").style.display = "flex";
                document.getElementById("leftarrow").style.display = "none";
                setSideNavOpen(false)
            }
        }
    }
    return (
        <div id='SidenavBody'>

            <div   onClick={() => NavOpenClose()} id='hamburger'>
               <HamBurger/>
            </div>
            <div onClick={() => NavOpenClose()} id='leftarrow'>
                <LeftArrow/>
            </div>
            <div className="SideNavIcons">
                <div className='icons'>
                    <ExploreChats />
                </div>
                <p id="text1">Explore Chats</p>
            </div>

            <div className="SideNavIcons" >
                <div className='icons'>
                <BusinessLeads />
                </div>
                <p id="text2">Business Leads</p>
            </div>

            <div className="SideNavIcons" >
                <div className='icons'>
                <MindMap />
                </div>
                <p id="text3">View Mind Map</p>
            </div>

            <div className="SideNavIcons" >
                <div className='icons'>
                <ManageTeams />
                </div>
                <p id="text4">Manage Team</p>
            </div>

            <div className="SideNavIcons">
                <div className='icons'>
                <ConfigureChatbot/>
                </div>
                <p id="text5">Configure Chatbot</p>
            </div>
        </div>
    )
}

export default Sidenav