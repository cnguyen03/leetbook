import React, { useState, ChangeEvent } from "react";

interface BoxInputModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBox: (boxName: string) => void;
}

function BoxInputModal({ isOpen, onClose, onAddBox }: BoxInputModalProps) {
  const [inputValue, setInputValue] = useState("");
  const [longInputvalue, setLongInputValue] = useState("");
  const [overlay, setOverlay] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleLongInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setLongInputValue(event.target.value);
  };

  const handleAddBox = () => {
    if (inputValue.trim() !== "") {
      onAddBox(inputValue.trim());
      setInputValue("");
      setLongInputValue("");
      onClose();
    }
  };

  return (
    <>
      <div
        style={{ display: isOpen ? "block" : "none" }}
        className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
      >
        {/* Input Box */}
        <div className="flex flex-col justify-center rounded-lg bg-note-custom-bg ml-80 mr-80 mt-36 pt-12 px-24">
          <input
            className="bg-note-custom-bg text-note-custom-header font-bold text-white placeholder-custom-input outline-none pb-2 mt-12 mb-3"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Untitled"
          />
          {/* {Paragraph} */}
          <textarea
            className="bg-note-custom-bg text-lg text-white placeholder-custom-input outline-none resize-none pb-80"
            value={longInputvalue}
            onChange={handleLongInputChange}
            placeholder="Enter notes..."
          />
          {/* Add button */}
          <button
            className="rounded-lg shadow-md bg-custom-grey text-white px-4 py-2 max-w-24"
            onClick={handleAddBox}
          >
            Add
          </button>
          {/* Cancel button */}
          <button
            className="rounded-lg shadow-md bg-custom-grey text-white px-4 py-2 max-w-24"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default BoxInputModal;
