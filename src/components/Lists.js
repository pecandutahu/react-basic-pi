import React from 'react';
import './lists.css';


function Lists({lists, delList}){
    return(
        <div>
            <div className="container">
                <div className="col-md-12" > 
                    <ul>
                        {lists.map((list) => {
                            return <li id={lists.id} onClick={() => {delList(list.id)}}>{list.text} </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Lists;