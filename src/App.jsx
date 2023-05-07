import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'
//import { BeakerIcon } from '@heroicons/react/24/solid'


function App() {
  const [inputs, setInputs] = useState([])
  const [currentInput, setCurrentInput] = useState('')
  //const [isChecked, setIsChecked] = useState(false)
  const [checkedItems, setCheckedItems] = useState([])
  
  
  const inputHandler = (e) => {
    //e.preventDefault()
    setCurrentInput(e.target.value)
  }

  const checkHandler = (index) => {
    
    //const checkStatus = e.target.checked
     /*
    setCheckedItems((prevCheckedItems) => {
     
      const updatedCheckedItems = [...prevCheckedItems]      
      updatedCheckedItems[index] = !updatedCheckedItems[index]    
      return updatedCheckedItems
      
     
    }) 
    */
    const newCheckedItems = [...checkedItems]
    newCheckedItems[index] = !newCheckedItems[index]
    setCheckedItems(newCheckedItems)
    console.log(checkedItems)
    //setIsChecked(!isChecked)
  }
  
  
  const clickHandler = (e) => {
        e.preventDefault()
      
        //const newInput = e.target.form[0].value
        //setCurrentInput(e.target.form[0].value)
        
        //setInput([input, currentInput])
      if(currentInput !== ""){
        if(inputs.length === 0){
          setInputs((prevInput) => [...prevInput, currentInput])
          // console.log('if empty', inputs)
        }else{
          setInputs([...inputs, currentInput])
          // console.log('if not empty', inputs)
        }
      }
        
        
        
        
        setCurrentInput('')
        // console.log(currentInput)
        // console.log(inputs)
        //setCount(count + 1)
        //setCount(prevCount => prevCount + 1)
        //console.log(currentInput)
  }

  



  return (
    <div className='container'>
        <h1 className='title'>TODO LIST</h1>
      <div className='form-wrapper'>
        <form id='form-input'>
            <label htmlFor="input">
              <input required className='todo-input' value={currentInput} id='input' onChange={ inputHandler } />
            </label>
        </form>
        <button className="btn" type='submit' form='form-input' onClick={clickHandler}>
        ADD
        </button>
        
      </div>
      <div className='todo-list-wrapper'>
          <div className='todo-list'>
              <label>{/*To-Do List:*/}</label>
              <TodoList checkedItems={checkedItems} inputs={inputs} />
          </div>
      </div>
    </div>
  )
}

export default App
