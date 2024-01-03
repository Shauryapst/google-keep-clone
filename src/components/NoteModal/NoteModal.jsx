import React, { useState, useEffect } from "react";
import "./NoteModal.css";
const NoteModal = ({ selectedNote, closeModal, addNote}) => {
  const [title, setTitle] = useState("Title");
  const [content, setContent] = useState("Note");
  const [isChanged, setIsChanged] = useState(false);

  useEffect(()=>{
    if(selectedNote!=null){
        setTitle(selectedNote.title);
        setContent(selectedNote.content);
    }
  },[selectedNote]);

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
        addNote({
            "title": title,
            "content": content
        })
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
            placeholder={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <textarea
            className="textarea-content"
            name="content"
            placeholder={content}
            onChange={handleContentChange}
          />
        </div>
        <button onClick={handleModalClose}>Close</button>
      </div>
    </div>
  );
};

export default NoteModal;
