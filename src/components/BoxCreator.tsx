import React, { useState } from "react";
import BoxInputModal from "./BoxInputModal";

function BoxCreator() {
  // boxes for individual notes
  const [boxes, setBoxes] = useState<string[]>([]);
  // boolean for modal viewability
  const [isModalOpen, setIsModalOpen] = useState(false);
  // selecter that saves whatever box is clicked/selecte 
  const [selectedBox, setSelectedBox] = useState<string | null>(null);

  // takes in a box and sets selectedbox as the current box and opens modal by setting to true
  const handleOpenModal = (boxName: string) => {
    setSelectedBox(boxName);
    setIsModalOpen(true);
  };

  // closes modal by setting to false 
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // takes in the title of box (or note) and adds to end of array of boxes
  const handleAddBox = (boxName: string) => {
    setBoxes([...boxes, boxName]);
  };

  return (
    <>
      {/* Add problem Button */}
      <div className="flex justify-center">
        <button
          className="rounded-lg shadow-md bg-custom-grey text-white mt-3 px-4 py-2"
          onClick={() => handleOpenModal("")} // onClick arrow function where modal opens when clicked
          style={{ border: "none" }}
        >
          Add Problem
        </button>
      </div>

      {/* Add Modal */}
      <BoxInputModal
        isOpen={isModalOpen} // will only show if isModalOpen is set to true
        onClose={handleCloseModal} // will only not show if isModalOpen is set to false
        onAddBox={handleAddBox} // uses handleAddBox function and passes as a prop to onAddBox
        selectedBox={selectedBox} // passes the name of selected box
      />

      {/* Boxes */}
      <div className="flex justify-center mt-3">
        {/* Display boxes */}
        {boxes.map((box, index) => ( // map method to display boxes in order
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