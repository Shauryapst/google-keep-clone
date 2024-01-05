import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/NavBar";
import './App.css';
import React, {useEffect, useState} from "react";

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
const App = () => {
  const [notes, setNotes] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(()=>{
    const loadedNotes = JSON.parse(localStorage.getItem('notes')) || data;
    setNotes(loadedNotes);
  },[]);
  // const handleSearch = (searchQuery) => {

  //   se
  //   const filtered = notes.filter(
  //     (note) =>
  //       note?.content.toLowerCase().includes(searchQuery.toLowerCase()) || note?.title.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setFilteredNotes(filtered);
  // };

  const updateNoteList = (newNoteList) => {
    setNotes(newNoteList);
    localStorage.setItem('notes', JSON.stringify(newNoteList));
    
  }
  
  return (
    <div className="App">
      <Navbar handleSearch={setSearchQuery}/>
      <Home notes={notes} searchQuery={searchQuery} updateNoteList={updateNoteList}/>
    </div>
  );
};

export default App;
