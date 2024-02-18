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
        <div className="flex justify-center mt-3">
          <input
            className="rounded-lg shadow-md bg-custom-grey text-white p-2"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter problem name..."
          />
          <button
            className="rounded-lg shadow-md bg-custom-grey text-white px-4 py-2 mx-2"
            onClick={handleAddBox}
          >
            Add
          </button>
          <button
            className="rounded-lg shadow-md bg-custom-grey text-white px-4 py-2"
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
