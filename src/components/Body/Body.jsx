import React, { useState } from 'react'
import "./Body.css"
import { TrainingLogo, GroundLogo } from "../Icons/Icons"
import { Datas } from './Datas'
function Body() {
    const [currentPageNum, setCurrentPageNum] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    const lastIIndex = currentPageNum * postPerPage;
    const firstIndex = lastIIndex - postPerPage;
    const currentPage = Datas.slice(firstIndex, lastIIndex);

    const NumOfPages = [];
    for (let i = 1; i <= Math.ceil(Datas.length / postPerPage); i++) {
        NumOfPages.push(i);
    }

    return (
        <div className='Body'>
            <div className='buttons'>
                <div className='buttons1'>
                    <button id='add'><p>+ ADD DATA</p></button>
                    <button id='training'><TrainingLogo /><p>DATA TRAINING STATUS</p></button>
                    <button id='truths'><GroundLogo /><p>GROUND TRUTHS</p></button>
                </div>
                <hr></hr>

                <div className='buttons2'>
                    <div className='searchBox'>
                        <label htmlFor="search">Search</label>
                        <input type="text" placeholder='Search' />
                    </div>

                    <div className='selections'>
                        <label htmlFor="result">Results</label>
                        <select name="result" id="results">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                    <button>SEARCH</button>
                </div>
            </div>

            <div className='data'>
                <table>
                    <thead>
                        <tr>
                            <th className='th1'>Data</th>
                            <th className='th2'>Source</th>
                            <th className='th3'>Type</th>
                            <th className='th4'>Created...</th>
                            <th className='th5'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPage.map((e, index) =>
                            <tr key={index}>
                                <td>{e.data}</td>
                                <td>{e.source}</td>
                                <td>{e.type}</td>

                                <td >{e.created}</td>
                                <td className='actions'><div className='both-action'><div className='pencil' onClick={() => alert("Test 1")}><e.actions.pencil /></div>&nbsp;&nbsp;&nbsp;&nbsp;<div className='delete' onClick={() => alert("Test 2")}><e.actions.delete /></div></div></td>

                            </tr>
                        )}
                    </tbody>
                </table>
                <div className='page-btns'>
                <button id='lt' onClick={()=>{currentPageNum>1 ? setCurrentPageNum(currentPageNum-1): console.log(currentPageNum)}}>&lt;</button>
                {NumOfPages.map((e, index)=>(
                <div  key={index} className='page-number-btns'>
                    <button onClick={(item)=>setCurrentPageNum(parseInt(item.target.innerText)) } id={e==currentPageNum ? "active" : ""}>{e}</button>
                </div>
                ))}
                <button id='gt' onClick={()=>{currentPageNum<NumOfPages.length?setCurrentPageNum(currentPageNum+1):console.log(currentPageNum)}}>&gt;</button>
                </div>
            </div>
        </div>
    )
}

export default Body
