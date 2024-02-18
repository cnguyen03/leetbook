import React, { useState } from "react";
import BoxInputModal from "./BoxInputModal";

function BoxCreator() {
  const [boxes, setBoxes] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddBox = (boxName: string) => {
    setBoxes([...boxes, boxName]);
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={handleOpenModal}
        style={{ border: "none" }}
      >
        Add Box
      </button>
      <BoxInputModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddBox={handleAddBox}
      />
      {/* Display boxes */}
      {boxes.map((box, index) => (
        <div key={index}>{box}</div>
      ))}
    </div>
  );
}

export default BoxCreator;
