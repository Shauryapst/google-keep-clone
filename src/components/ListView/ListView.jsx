import React from "react";
import TabView from "../TabView/TabView";
import './ListView.css';

const ListView = ({ notes }) => {
  return (
    <div className="list">
      {notes.map((note) => {
        return <TabView title={note.title} />;
      })}
    </div>
  );
};

export default ListView;
