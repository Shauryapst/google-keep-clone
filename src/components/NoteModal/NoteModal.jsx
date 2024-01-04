import React, { useState, useEffect } from "react";
import "./NoteModal.css";
import { v4 as uuidv4 } from "uuid";
import colorPickerIcon from "./icons/palette.png";
import trashIcon from "./icons/recycle-bin.png";
import closeIcon from "./icons/close.png";
const NoteModal = ({
  selectedNote,
  closeModal,
  addNote,
  editNote,
  deleteNote,
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [noteColor, setNoteColor] = useState("#ffffff");
  const [isChanged, setIsChanged] = useState(false);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  useEffect(() => {
    if (selectedNote != null) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
      setNoteColor(selectedNote.color);
    }
  }, [selectedNote]);

  const generateId = () => {
    return uuidv4();
  };

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
    setIsChanged(true);
  };
  const handleContentChange = (e) => {
    e.preventDefault();
    setContent(e.target.value);
    setIsChanged(true);
  };

  const handleColorChange = (e) => {
    setNoteColor(e.target.value);
    setIsChanged(true);
  };

  const handleColorPickerToggle = () => {
    setIsColorPickerOpen(!isColorPickerOpen);
  };

  const handleModalClose = () => {
    if (isChanged && (title.length !== 0 || content.length !== 0)) {
      if (selectedNote == null) {
        addNote({
          title: title,
          content: content,
          id: generateId(),
          color: noteColor
        });
      } else {
        editNote({
          title: title,
          content: content,
          id: selectedNote.id,
          color: noteColor
        });
      }
    }
    closeModal();
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (shouldDelete) {
      deleteNote(selectedNote.id);
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleModalClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div>
          <textarea
            className="textarea-title"
            name="title"
            placeholder="Title"
            onChange={handleTitleChange}
            value={title}
          />
          <textarea
            className="textarea-content"
            name="content"
            placeholder="Content"
            onChange={handleContentChange}
            value={content}
          />
        </div>
        <div className="modal-buttons">
          <div>
            <button onClick={handleColorPickerToggle}>
              <img className="modal-icons" src={colorPickerIcon} alt="" />
              
                <input
                  type="color"
                  id="favcolor"
                  name="favcolor"
                  value={noteColor}
                  onChange={handleColorChange}
                />
              
            </button>

            <button
              className="trash-button"
              onClick={handleDeleteClick}
            >
              <img className="modal-icons" src={trashIcon} alt="" />
            </button>
          </div>
          <button onClick={handleModalClose}>
            <img className="modal-icons" src={closeIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
