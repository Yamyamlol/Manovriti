import { useState } from "react";
import "../index.css";
import ConfirmModal from "./ui/ConfirmModel";
import Button from "./ui/Button";

export default function NoteEditor({ note, onSave, onDelete }) {
  const [content, setContent] = useState(note.content);
  const [isConfirming, setIsConfirming] = useState(false);

  const handleSave = () => {
    const updatedNote = { ...note, content };
    updatedNote.size =
      content.length < 100
        ? "small"
        : content.length < 200
        ? "medium"
        : "large";
    onSave(updatedNote);
  };

  const handleDelete = () => {
    setIsConfirming(true); // Show the confirmation modal
  };

  const handleConfirmDelete = () => {
    onDelete(note.id); // Delete the note
    setIsConfirming(false); // Close the modal
  };

  const handleCancelDelete = () => {
    setIsConfirming(false); // Close the modal without deleting
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#00000080] z-50 p-4">
      <div className="bg-[#EEE9F7] p-6 rounded-xl w-full max-w-2xl shadow-lg flex flex-col">
        {/* Top bar: Save button on left, Trash icon on right */}
        <div className="flex justify-between items-center mb-4">
          {/* Save Button on the Left */}
          <Button onClick={handleSave}>
            Save
          </Button>

          {/* Trash Can Icon on the Right */}
          <i
            className="fa-solid fa-trash-can text-3xl cursor-pointer text-[#FF4747] hover:text-[#D13F3F]"
            onClick={handleDelete}
          ></i>
        </div>

        {/* Note Editor */}
        <div className="relative mb-4">
          {/* Background */}
          <div className="absolute inset-0 bg-notebook-paper bg-cover bg-center z-0"></div>

          {/* Text Area */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-96 p-4 bg-transparent text-[#3D53A0] font-medium resize-none outline-none focus:ring-2 focus:ring-[#3D53A0] focus:border-transparent rounded-lg z-10 relative"
            placeholder="Write your note here..."
          />
        </div>
      </div>

      {/* Confirmation Modal */}
      {isConfirming && (
        <ConfirmModal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
          message="Are you sure you want to delete this note?"
        />
      )}
    </div>
  );
}
