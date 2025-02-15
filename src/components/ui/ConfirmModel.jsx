
import React from 'react';

export default function ConfirmModal({ onConfirm, onCancel, message }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#00000080] z-50 p-4">
      <div className="bg-[#FFF] p-6 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold text-[#3D53A0] mb-4">{message}</h2>
        <div className="flex justify-between space-x-4">
          <button
            onClick={onCancel}
            className="w-full bg-[#EDE8F5] text-[#3D53A0] font-bold py-2 px-4 rounded-md border-2 border-[#3D53A0] hover:bg-[#3D53A0] hover:text-white transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-md border-2 border-red-600 hover:bg-red-700 transition-all"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
