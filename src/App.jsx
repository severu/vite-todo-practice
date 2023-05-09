import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'
import { BeakerIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [inputs, setInputs] = useState([])
  const [currentInput, setCurrentInput] = useState('')
  //const [isChecked, setIsChecked] = useState(false)
  const [checkedItems, setCheckedItems] = useState([])
  //const [reversedInput, setReversedInput] = useState([])
  const id = crypto.randomUUID();
  
  
  const inputHandler = (e) => {
    //e.preventDefault()
    setCurrentInput(e.target.value)
  }

  const checkHandler = (input) => {
    console.log(input)
    input.isChecked = !input.isChecked;
    console.log(input.isChecked)
    //const checkStatus = e.target.checked
     /*
    setCheckedItems((prevCheckedItems) => {
     
      const updatedCheckedItems = [...prevCheckedItems]      
      updatedCheckedItems[index] = !updatedCheckedItems[index]    
      return updatedCheckedItems
    }) 
    setCheckedItems((inputs) => 
            inputs.filter((item) => item.isChecked !== false));
    */
      setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.filter((items) => items.id !== input.id)
      );
    //const newCheckedItems = [...checkedItems]
    //newCheckedItems.id = !newCheckedItems.id
    //setCheckedItems(newCheckedItems)
    //console.log('inside checkhandler', checkedItems)
    //setIsChecked(!isChecked)
  }

  const handleDelete = (id) => {
    //const uuid = uuidv4;
    console.log(id)
    setInputs((prevInputs) =>
    prevInputs.filter((inputs) => inputs.id !== id)
  );
    //setInputs(reversedInput)
    
    setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.filter((inputs) => inputs.id !== id)
    );
    console.log("inside handleDelete",  inputs)
  };
  

  // event handler for input
  const clickHandler = (e) => {
        e.preventDefault()
        
        //setInput([input, currentInput])
      if(currentInput !== ""){
        if(inputs.length === 0){
          setInputs((prevInputs) => [...prevInputs, {id: id, todo: currentInput, isChecked: false}])
          //setreversedInput(inputs.reverse())
          console.log('if empty', inputs)
        }else{
          setInputs([...inputs, {id: id, todo: currentInput, isChecked: false}])
          //setReversedInput(inputs.reverse())
          console.log('not empty', inputs)
          // console.log('if not empty', inputs)
        }
      }        
        setCurrentInput('')
        
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
        <button className="add-btn" type='submit' form='form-input' onClick={clickHandler}> 
        {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>*/}
        
        <ArrowDownTrayIcon className="h-6 w-6 text-blue-500" />
        </button>
        
      </div>
      <div className='todo-list-wrapper'>
          <div className='todo-list'>
              <label>{/*To-Do List:*/}</label>
              <TodoList checkedItems={checkedItems} 
                        inputs={inputs}
                        
                        checkHandler={checkHandler} 
                        handleDelete={handleDelete}
              />
          </div>
      </div>
    </div>
  )
}

export default App


