import React from "react";
import TabView from "../TabView/TabView";
import './ListView.css';

const ListView = ({ notes, openModal, deleteNote }) => {
  return (
    <div className="list">
      {notes.map((note) => {
        return <TabView key={note.id} note={note} openModal={openModal} deleteNote={deleteNote} />;
      })}
    </div>
  );
};

export default ListView;
