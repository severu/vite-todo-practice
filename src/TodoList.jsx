import React from 'react'
import './App.css'
import './index.css'
import { useState } from 'react'
import { BeakerIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid'

function TodoList({ checkedItems, inputs, checkHandler, handleDelete }) {
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
                {inputs.map((input, index) => {
                    
                      return ( <li key={index} onClick={e => {
                        const div = e.currentTarget;
                        const del = div.querySelector('.del-btn');
                        if(del === e.target){
                          
                          return; 
                        }else{
                          
                          return checkHandler(index);
                        }
                        
                  }
                              
                              } className={checkedItems[index] ? 'strike-tr' : ''}>
                                      <div className='chk-box-container'>
                                          <input className='checkbox' type='checkbox' />
                                          <span>{input}</span>
                                      </div>
                                          
                                          <span className='svg-del-container'>  
                                              <button className='del-btn' onClick={()=> {handleDelete(index)}}>X
                                              </button>
                                          </span>
                          
                          </li>)
                    

                    
                })}
        </ul>
    </>
  )
}

export default TodoList