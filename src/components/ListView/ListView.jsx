import React from "react";
import TabView from "../TabView/TabView";
import './ListView.css';

const ListView = ({ notes, openModal }) => {
  return (
    <div className="list">
      {notes.map((note) => {
        return <TabView key={note.id} note={note} openModal={openModal} />;
      })}
    </div>
  );
};

export default ListView;
