import React,{useState} from 'react'
import "./Topnav.css"
import {DownArrow, HamBurger, EscelationMark} from "../Icons/Icons"
const user = require("./user.png")

function Topnav() {
    const [NavOpenClose, setNavOpenClose] = useState(false);
    function SideNavOpenClose(){
            document.getElementById("SidenavBody").style.display="block";
            document.getElementById("text1").style.display = "flex";
            document.getElementById("text2").style.display = "flex";
            document.getElementById("text3").style.display = "flex";
            document.getElementById("text4").style.display = "flex";
            document.getElementById("text5").style.display = "flex";
            document.getElementById("leftarrow").style.display = "flex";
            document.getElementById("hamburgerTop").style.display = "none"
            document.getElementById("hamburger").style.display = "none";
        }
    return (
        <header className='topnav'>
            <div className='ham-texts'>
            <div   onClick={() => SideNavOpenClose()} id='hamburgerTop'>
               <HamBurger/>
            </div>
            <div className='alltxts'>
                <p className='mainText'>Chatbot Mind Map</p>
                <p className='text'>This is the brain and the memory of the chatbot. You can
                    add, edit and analyse the source data being used to
                    answer user queries from here</p>
            </div>
                    <div className='escMark'>
                        <EscelationMark/>
                    </div>
            </div>
            
            <div className='allbtns'>
                <div id='tour-btn'>
                    GUIDED TOUR
                </div>
                <div id='org-btn'>
                    SELECT ORG
                    <DownArrow/>
                </div>
                <img src={user} />
            </div>
        </header>
    )
}

export default Topnav