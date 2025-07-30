import { FormRow, ActionButton } from "./index";
import Frame from "../assets/images/Frame.png";
import { Form } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa";
import customFetch from "../utils/customFetch";

const InventoryModal = ({ onClose, data }) => {
  return (
    <div
      className="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-[#5f5c5c70]  backdrop-blur-sm   flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl font-bold cursor-pointer"
          >
            <FaTimes />
          </button>

          <h2 className="text-xl font-semibold mb-2">Title</h2>

          <div className="flex flex-col items-center  gap-2 text-sm text-gray-600 mb-4 md:items-start md:flex-row">
            <img src={Frame} alt="frame" />
            <p className="text-center md:text-start">
              Informative piece of text that can be used regarding this modal.
            </p>
          </div>

          <Form method="post" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="hidden" name="id" value={data.id} />
              <FormRow
                type="text"
                name="item"
                labelText="Item"
                placeholder="Type the Item's name"
                defaultValue={data.item}
                value={data.item}
                onChange={(e) => e.target.value}
              />
              <FormRow
                type="text"
                name="quantity"
                labelText="Quantity"
                placeholder="Quantity"
                defaultValue={data.quantity}
                value={data.quantity}
                onChange={(e) => e.target.value}
              />
            </div>

            <div className="grid grid-cols-1  gap-4">
              <FormRow
                type="textarea"
                name="description"
                labelText="Description"
                placeholder="Type the description..."
                defaultValue={data.description}
                value={data.description}
                onChange={(e) => e.target.value}
              />
              <FormRow
                type="textarea"
                name="notes"
                labelText="Notes"
                placeholder="Type a note..."
                defaultValue={data.notes}
                value={data.notes}
                onChange={(e) => e.target.value}
              />
            </div>

            <div className=" flex flex-col items-center gap-4   md:flex-row md:justify-end">
              <ActionButton
                label="Update Changes"
                padding="px-4 py-2"
                bgClass="bg-primary-blue"
                textClass="text-primary-white"
                type="submit"
                cursor="cursor-pointer"
                icon={FaCheck}
              />
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default InventoryModal;
