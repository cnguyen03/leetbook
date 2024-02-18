import React, { useState, ChangeEvent } from "react";

interface BoxInputModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBox: (boxName: string) => void;
}

function BoxInputModal({ isOpen, onClose, onAddBox }: BoxInputModalProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddBox = () => {
    if (inputValue.trim() !== "") {
      onAddBox(inputValue.trim());
      setInputValue("");
      onClose();
    }
  };

  return (
    <>
      <div style={{ display: isOpen ? "block" : "none" }}>
        <div>
          <input
            className="border border-black border-2 p-1.5"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter box name"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2"
            onClick={handleAddBox}
          >
            Add Box
          </button>
          <button
            className="border border-black border-2 p-1.5"
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
