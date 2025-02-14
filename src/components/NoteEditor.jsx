
import { useState } from "react"


export default function NoteEditor({ note, onSave }) {
  const [content, setContent] = useState(note.content)

  const handleSave = () => {
    const updatedNote = { ...note, content }
    updatedNote.size = content.length < 100 ? "small" : content.length < 200 ? "medium" : "large"
    onSave(updatedNote)
  }

  return (
    <div className="fixed inset-0 bg-white z-50 p-4 flex flex-col">
      <button variant="ghost" className="self-start mb-4" onClick={handleSave}>
        Back
      </button>
      <div className="flex-grow relative">
        <div className="absolute inset-0 bg-notebook-paper"></div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-full p-4 bg-transparent relative z-10 resize-none focus:outline-none"
          placeholder="Write your note here..."
        />
      </div>
    </div>
  )
}

