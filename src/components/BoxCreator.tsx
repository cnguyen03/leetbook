import React, { useState } from "react";
import BoxInputModal from "./BoxInputModal";

function BoxCreator() {
  const [boxes, setBoxes] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBox, setSelectedBox] = useState<string | null>(null);

  const handleOpenModal = (boxName: string) => {
    setSelectedBox(boxName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddBox = (boxName: string) => {
    setBoxes([...boxes, boxName]);
  };

  return (
    <>
      {/* Add problem Button */}
      <div className="flex justify-center">
        <button
          className="rounded-lg shadow-md bg-custom-grey text-white mt-3 px-4 py-2"
          onClick={() => handleOpenModal("")}
          style={{ border: "none" }}
        >
          Add Problem
        </button>
      </div>

      {/* Add Modal */}
      <BoxInputModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddBox={handleAddBox}
        selectedBox={selectedBox}
      />

      {/* Boxes */}
      <div className="flex justify-center mt-3">
        {/* Display boxes */}
        {boxes.map((box, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md bg-custom-grey text-white mx-2 p-2"
            onClick={() => handleOpenModal(box)}
          >
            {box}
          </div>
        ))}
      </div>
    </>
  );
}

export default BoxCreator;
