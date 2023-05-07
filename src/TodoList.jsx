import React from 'react'
import './App.css'
import './index.css'

function TodoList({ checkedItems, inputs, checkHandler }) {
  return (
    <>
        <ul>
                {inputs.map((input, index) => {

                    return ( <li key={index} onClick={e => checkHandler(index)} className={checkedItems[index] ? 'strike-tr greyed-out' : ''}>
                                            <input className='checkbox' type='checkbox' />{input}<span></span>
                            
                            </li>)
                })}
        </ul>
    </>
  )
}

export default TodoList