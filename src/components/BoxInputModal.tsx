import React, { useRef, useState, useEffect, ChangeEvent } from "react";

interface BoxInputModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBox: (boxName: string) => void;
}

function BoxInputModal({ isOpen, onClose, onAddBox }: BoxInputModalProps) {
  const [inputValue, setInputValue] = useState("");
  const [longInputValue, setLongInputValue] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleLongInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setLongInputValue(event.target.value);
  };

  const handleAddBox = () => {
    if (inputValue.trim() !== "") {
      onAddBox(inputValue.trim());
      // NEED TO SAVE LONG INPUT VALUE HERE
    } else if (longInputValue.trim() !== "") {
      onAddBox("Untitled");
      // NEED TO SAVE LONG INPUT VALUE HERE
    }
    setInputValue("");
    setLongInputValue("");
    onClose();
  };

  // Clicking outside of menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleAddBox();
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, handleAddBox]);

  return (
    <>
      <div
        style={{ display: isOpen ? "block" : "none" }}
        className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
      >
        <div
          className="flex flex-col justify-center rounded-lg bg-note-custom-bg mx-80 mt-12 pt-12 px-24"
          ref={modalRef}
        >
          {/* Input Box */}
          <input
            className="bg-note-custom-bg text-note-custom-header font-bold text-white placeholder-custom-input outline-none pb-1 mt-12 mb-3"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Untitled"
          />
          <div className="border-b-2 border-custom-input"></div>
          {/* {Paragraph} */}
          <textarea
            className="bg-note-custom-bg text-lg text-white placeholder-custom-input outline-none resize-none mt-3 h-96"
            value={longInputValue}
            onChange={handleLongInputChange}
            placeholder="Enter notes..."
          />
        </div>
      </div>
    </>
  );
}

export default BoxInputModal;
