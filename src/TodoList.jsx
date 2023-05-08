import React from 'react'
import './App.css'
import './index.css'
import { BeakerIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid'

function TodoList({ checkedItems, inputs, checkHandler }) {
  return (
    <>
        <ul>
                {inputs.map((input, index) => {

                    return ( <li key={index} onClick={e => {
                          const div = e.currentTarget;
                          const del = div.querySelector('.del-btn');
                          if(del === e.target){
                            console.log('here')
                            return; 
                          }else{
                            
                            return checkHandler(index);
                          }
                          
                    }
                                
                                } className={checkedItems[index] ? 'strike-tr greyed-out' : ''}>
                                        <div className='chk-box-container'>
                                            <input className='checkbox' type='checkbox' />
                                            <span>{input}</span>
                                        </div>
                                            
                                            <span className='svg-del-container'>  
                                                <button className='del-btn'>X
                                                </button>
                                            </span>
                            
                            </li>)
                })}
        </ul>
    </>
  )
}

export default TodoList