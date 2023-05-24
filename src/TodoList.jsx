import React from 'react'
import './App.css'
import './index.css'
import { useState } from 'react'
import { Popover } from "react-tiny-popover";
import { BeakerIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid'




function TodoList({ inputs, checkHandler, handleDelete, id }) {

  

  

  
  return (
    <>
        <ul>
                {inputs.toReversed().map((input, index) => {
                      //console.log('uuid', id)
                      return ( <li key={input.id} onClick={e => {
                        
                        const div = e.currentTarget;
                        const edit = div.querySelector('.edt-btn');
                        const del = div.querySelector('.del-btn');
                        const close = div.querySelector('.close-btn');
                        //console.log(edit)
                        if(edit === e.target || del === e.target || close === e.target){
                          
                          return; 
                        }else{
                          
                          return checkHandler(input);
                        }
                        
                  }
                              
                              } className={input.isChecked ? 'strike-tr' : ''}>
                                      <div className='chk-box-container'>
                                          <input hidden className='checkbox' type='checkbox' />
                                          <span>{input.todo}</span>
                                      </div>
                                          
                                          
                                          <span className='svg-del-container'>  
                                              <button className='edt-btn' 
                                                      onClick={() => {handleEdit(input.id)}}>EDIT
                                              </button>   
                                              
                                              <button className='del-btn' 
                                                      onClick={() => {handleDelete(input.id)}}>X
                                              </button>      
                                          </span>
                                          
                                                    
                                              
                          
                          </li>)
                    

                    
                })}
        </ul>
    </>
  )
}

export default TodoList