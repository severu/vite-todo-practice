import React from 'react'
import './App.css'
import './index.css'
import { useState } from 'react'
import { BeakerIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid'




function TodoList({ inputs, checkHandler, handleDelete, id }) {
  const [isEditable, setIsEditable] = useState(false)
  const handleEdit = (e) => {
        setIsEditable(false)
        console.log("edit")
  }
  
  return (
    <>
        <ul>
                {inputs.toReversed().map((input, index) => {
                      //console.log('uuid', id)
                      return ( <li key={input.id} onClick={e => {
                        const div = e.currentTarget;
                        const edit = div.querySelector('.edt-btn');
                        
                        if(edit === e.target){
                          
                          return; 
                        }else{
                          
                          return checkHandler(input);
                        }
                        
                  }
                              
                              } className={input.isChecked ? 'strike-tr' : ''}>
                                      <div className='chk-box-container'>
                                          <input hidden className='checkbox' type='checkbox' />
                                          <span contentEditable={isEditable}>{input.todo}</span>
                                      </div>
                                          
                                          
                                          <span className='svg-del-container'>  
                                              <button className='edt-btn' 
                                                      onClick={() => {setIsEditable(true)}}>EDIT
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