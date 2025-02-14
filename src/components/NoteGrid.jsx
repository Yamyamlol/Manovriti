import Note from "./Note"


export default function NoteGrid({ notes, onEditNote }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {notes.map((note) => (
        <Note key={note.id} note={note} onEdit={onEditNote} />
      ))}
    </div>
  )
}

