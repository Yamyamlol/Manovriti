import { useState } from "react";
import SearchBar from "../SearchBar";
import NoteGrid from "../NoteGrid";
import NoteEditor from "../NoteEditor";
import Button from "../ui/Button";

export default function Journal() {
  const [notes, setNotes] = useState([
    { id: 1, content: "This is a short note.", size: "small" },
    { id: 2, content: "This is a medium-length note with some more content to display.", size: "medium" },
    {
      id: 3,
      content:
        "This is a longer note with even more content. It should take up more space in the grid to accommodate its length.",
      size: "large",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingNote, setEditingNote] = useState(null);

  const filteredNotes = notes.filter((note) =>
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateNote = () => {
    const newNote = {
      id: Date.now(),
      content: "",
      size: "small",
    };
    setNotes([...notes, newNote]);
    setEditingNote(newNote);
  };

  const handleSaveNote = (updatedNote) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
    setEditingNote(null);
  };

  const handleDeleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId)); // Delete the note
    setEditingNote(null); // Close the editor
  };
  

  return (
    <div className="container mx-auto p-6 rounded-lg shadow-lg h-screen">
      <h1 className="text-4xl font-bold mb-8">My Journal</h1>
      {editingNote ? (
        <NoteEditor
          note={editingNote}
          onSave={handleSaveNote}
          onDelete={handleDeleteNote} 
        />
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Button onClick={handleCreateNote}>New Note</Button>
          </div>
          <NoteGrid notes={filteredNotes} onEditNote={setEditingNote} />
        </>
      )}
    </div>
  );
}
