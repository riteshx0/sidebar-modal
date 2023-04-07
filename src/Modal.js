 import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {useGlobalContext} from './context'
const Modal = () =>{
  const {isModalOpen,openModalbar} = useGlobalContext()
  return <div className = {` ${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'} `}>

<div className = 'modal-container'>
  <h3> Modal Content  </h3>
  <button className = 'close-modal-btn' onClick = {openModalbar}>
<FaTimes />

  </button>
</div>
  </div>
}

export default Modal
