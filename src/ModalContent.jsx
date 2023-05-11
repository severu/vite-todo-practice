import React from 'react'
import './index.css'

function ModalContent({ onClose, handleDelete, input }) {
  return (
    <div className='modal'>
        <div>Are you sure you want to delete this item?</div>
        <button onClick={()=> {handleDelete(input.id)}}>Yes</button>
        <button className="modal-no" onClick={ onClose
            
        }>No</button>
    </div>
  )
}

export default ModalContent