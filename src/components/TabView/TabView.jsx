import React, { useState } from 'react';
import './TabView.css';

const TabView = ({ note, openModal, deleteNote }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    openModal(note);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    const shouldDelete = window.confirm('Are you sure you want to delete this note?');

    if (shouldDelete) {
      deleteNote(note.id);
    }
    
  };

  

  return (
    <div
      className='tab'
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {note?.title}
      {isHovered && (
        <button className="delete-button" onClick={handleDeleteClick}>
          <i class="fa fa-trash"></i>
        </button>
      )}
    </div>
  );
};

export default TabView;
