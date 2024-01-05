import React, { useState } from "react";
import "./TabView.css";

const TabView = ({ note, openModal, deleteNote }) => {
  const [isHovered, setIsHovered] = useState(false);

  const truncatedContent = note?.content
    ? note.content.substring(0, 100) + (note?.content.length>100?"...":"")
    : "";

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
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (shouldDelete) {
      deleteNote(note.id);
    }
  };
  const tabStyle = {
    backgroundColor: note?.color || "#fff"
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const contentStyle = {
    fontSize: "14px",
    color: "#555",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  return (
    <div
      className="tab"
      style={tabStyle}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={titleStyle}>{note?.title}</div>
      <div style={contentStyle}>{truncatedContent}</div>
      {isHovered && (
        <button
          className="delete-button"
          onClick={handleDeleteClick}
          style={{ marginTop: "5px" }}
        >
          <i className="fa fa-trash"></i>
        </button>
      )}
    </div>
  );
};

export default TabView;
