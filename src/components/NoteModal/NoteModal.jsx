import React, { useState, useEffect } from "react";
import "./NoteModal.css";
import { v4 as uuidv4 } from 'uuid';
const NoteModal = ({ selectedNote, closeModal, addNote, editNote}) => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [isChanged, setIsChanged] = useState(false);

  useEffect(()=>{
    if(selectedNote!=null){
        setTitle(selectedNote.title);
        setContent(selectedNote.content);
    }
  },[selectedNote]);

  const generateId = () => {
    return uuidv4();
  };

  const handleTitleChange = (e) =>{
    e.preventDefault();
    setTitle(e.target.value);
    setIsChanged(true);
  }
  const handleContentChange = (e) => {
    e.preventDefault();
    setContent(e.target.value);
    setIsChanged(true);
  }

  const handleModalClose = () => {

    if(isChanged && (title.length !==0 || content.length!==0)){
      if(selectedNote == null){
        addNote({
            "title": title,
            "content": content,
            "id" : generateId()
        })
      }
      else{
        editNote({
          "title":title,
          "content": content,
          "id": selectedNote.id
        })
      }
    }
    closeModal();

  }
  
  
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div>
          <textarea
            className="textarea-title"
            name="title"
            placeholder="Title"
            onChange={handleTitleChange}
            value={title}
          />
        </div>
        <div>
          <textarea
            className="textarea-content"
            name="content"
            placeholder="Content"
            onChange={handleContentChange}
            value={content}
          />
        </div>
        <button onClick={handleModalClose}>Close</button>
      </div>
    </div>
  );
};

export default NoteModal;
