// components/Home.js
import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import ListView from "../ListView/ListView";
import "./Home.css";
import NoteModal from "../NoteModal/NoteModal";

const data = [
  {
    id: "1",
    title: "1",
    content: "1",
  },
  {
    id: "2",
    title: "2",
    content: "2",
  },
  {
    id: "3",
    title: "3",
    content: "3",
  },
  {
    id: "4",
    title: "4",
    content: "4",
  },
];

const Home = () => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState(data);

  const openModal = (note) => {
    setSelectedNote(note);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAddButtonClick = () => {
    setSelectedNote(null);
    setModalOpen(true);
  };

  const addNote = (newNote) => {
    setNotes([newNote, ...notes]);
  };
  const editNote = (updatedNote) => {
    const noteIndex = notes.findIndex((note) => note.id === updatedNote.id);
    if (noteIndex !== -1) {
      const updatedNotes = [...notes];
      updatedNotes[noteIndex] = updatedNote;
      setNotes(updatedNotes);
      setModalOpen(false);
    }
  };

  const deleteNote = (noteToDeleteId) =>{
    const updatedNotes = notes.filter((note) => note.id !== noteToDeleteId);
    setNotes(updatedNotes);

  }
  return (
    <div className="home-container">
      <div className="note-list">
        <ListView notes={notes} openModal={openModal} deleteNote={deleteNote} />
      </div>

      <button className="add-note-button" onClick={handleAddButtonClick}>
        +
      </button>
      {isModalOpen && (
        <NoteModal
          selectedNote={selectedNote}
          closeModal={closeModal}
          addNote={addNote}
          editNote={editNote}
          deleteNote={deleteNote}
        />
      )}
    </div>
  );
};

export default Home;
