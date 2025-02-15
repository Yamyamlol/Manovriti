import { useState } from "react"
import SearchBar from "../SearchBar"
import NoteGrid from "../NoteGrid"
import NoteEditor from "../NoteEditor"
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
  ])
  const [searchTerm, setSearchTerm] = useState("")
  const [editingNote, setEditingNote] = useState(null)

  const filteredNotes = notes.filter((note) => note.content.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleCreateNote = () => {
    const newNote = {
      id: Date.now(),
      content: "",
      size: "small",
    }
    setNotes([...notes, newNote])
    setEditingNote(newNote)
  }

  const handleSaveNote = (updatedNote) => {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)))
    setEditingNote(null)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">My Journal</h1>
      {editingNote ? (
        <NoteEditor note={editingNote} onSave={handleSaveNote} />
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <button onClick={handleCreateNote}>
               New Note
            </button>
          </div>
          <NoteGrid notes={filteredNotes} onEditNote={setEditingNote} />
        </>
      )}
    </div>
  )
}

