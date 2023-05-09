import React from 'react'
import './App.css'
import './index.css'
import { useState } from 'react'
import { BeakerIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import { v4 as uuidv4 } from 'uuid'


function TodoList({ checkedItems, inputs, checkHandler, handleDelete, id }) {
  /*const [deletedItems, setDeletedItems] = useState([])
  const handleDelete = (e, index) => {
      e.preventDefault()
      if(inputs[index].length !== 0){
        delete inputs[index]
        setDeletedItems((prevInputs) => [...prevInputs, inputs[index]])
      }
      
      
  }*/
  return (
    <>
        <ul>
                {inputs.toReversed().map((input, index) => {
                      //console.log('uuid', id)
                      return ( <li key={input.id} onClick={e => {
                        const div = e.currentTarget;
                        const del = div.querySelector('.del-btn');
                        if(del === e.target){
                          
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
                                              <button className='del-btn' onClick={()=> {handleDelete(input.id)}}>X
                                              </button>
                                          </span>
                          
                          </li>)
                    

                    
                })}
        </ul>
    </>
  )
}

export default TodoList