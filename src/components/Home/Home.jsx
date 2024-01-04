// components/Home.js
import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import ListView from "../ListView/ListView";
import "./Home.css";
import NoteModal from "../NoteModal/NoteModal";

const Home = ({ notes, searchQuery, updateNoteList }) => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [displayNotes, setDisplayedNotes] = useState(notes);

  useEffect(() => {
    if (searchQuery.length !== 0) {
      setDisplayedNotes(
        notes.filter(
          (note) =>
            note?.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note?.title?.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setDisplayedNotes(notes);
    }
  }, [searchQuery, notes]);

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
    updateNoteList([newNote, ...notes]);
  };
  const editNote = (updatedNote) => {
    const noteIndex = notes.findIndex((note) => note.id === updatedNote.id);
    if (noteIndex !== -1) {
      const updatedNotes = [...notes];
      updatedNotes[noteIndex] = updatedNote;
      updateNoteList(updatedNotes);
      setModalOpen(false);
    }
  };

  const deleteNote = (noteToDeleteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteToDeleteId);
    updateNoteList(updatedNotes);
  };
  return (
    <div className="home-container">
      <div className="add-note-box">
        <span className="add-note-tab" onClick={handleAddButtonClick}>
          <i className="fa fa-plus add-note-icon"></i>
        </span>
      </div>
      <div className="note-list">
        <ListView
          notes={displayNotes}
          openModal={openModal}
          deleteNote={deleteNote}
        />
      </div>
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
