import React from 'react'
import './TabView.css';
const TabView = ({title, content}) => {
  return (
    <div className='tab'>{title}</div>
  )
}

export default TabView