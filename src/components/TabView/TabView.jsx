import React from 'react'
import './TabView.css';
const TabView = ({note, openModal }) => {

  const handleClick = () =>{
    openModal(note);
  }
  return (
    <div className='tab' onClick={handleClick}>{note?.title}</div>
  )
}

export default TabView