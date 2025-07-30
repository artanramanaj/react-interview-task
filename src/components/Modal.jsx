import React, { useState } from "react";
import { Form } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa";
import { FormRow, ActionButton } from "./index";
import Frame from "../assets/images/Frame.png";
import { FaChevronDown } from "react-icons/fa";
const Modal = ({ onClose }) => {
  const categoryOptions = [
    { value: "sidewalk_shed", label: "Sidewalk Shed" },
    { value: "scaffold", label: "Scaffold" },
    { value: "shoring", label: "Shoring" },
  ];

  const statusOptions = [
    { value: "completed", label: "Completed" },
    { value: "in_progress", label: "In Progress" },
    { value: "on_hold", label: "On Hold" },
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategoryChange = (e) => {
    const selectedValues = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedCategories(selectedValues);
  };

  const removeCategory = (value) => {
    setSelectedCategories(selectedCategories.filter((v) => v !== value));
  };
  const getCategoryOptionClass = (value, selected) => {
    if (!selected) return "";

    if (value === "sidewalk_shed") {
      return "bg-primary-green text-white rounded py-1";
    }

    if (value === "scaffold") {
      return "bg-primary-yellow text-white rounded py-1";
    }

    if (value === "shoring") {
      return "bg-primary-purple text-white rounded py-1";
    }

    return "";
  };

  return (
    <div
      className="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-[#5f5c5c70] backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl font-bold cursor-pointer"
          >
            <FaTimes />
          </button>

          <h2 className="text-xl font-semibold mb-2">Title</h2>

          <div className="flex flex-col items-center gap-2 text-sm text-gray-600 mb-4 md:items-start md:flex-row">
            <img src={Frame} alt="frame" />
            <p className="text-center md:text-start">
              Informative piece of text that can be used regarding this modal.
            </p>
          </div>

          <Form method="post" className="space-y-4">
            <FormRow
              type="text"
              name="name"
              labelText="Name"
              placeholder="Type the jobsite’s name"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Category Included
                </label>
                <div
                  className={`${
                    isDropdownOpen ? "rounded-tl rounded-tr" : "rounded"
                  }w-full flex items-center justify-between bg-primary-gray  px-3 py-2 text-sm cursor-pointer focus:outline-none focus:ring focus:ring-primary-blue`}
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                  Select <FaChevronDown />
                </div>
                {isDropdownOpen ? (
                  <select
                    multiple
                    name="category"
                    className="w-full bg-primary-gray  px-3 py-2  cursor-pointer focus:outline-none  overflow-hidden focus:ring focus:ring-primary-blue"
                    value={selectedCategories}
                    onChange={handleCategoryChange}
                  >
                    {categoryOptions.map((option) => {
                      const isSelected = selectedCategories.includes(
                        option.value
                      );
                      let style = getCategoryOptionClass(
                        option.value,
                        isSelected
                      );

                      return (
                        <option
                          key={option.value}
                          value={option.value}
                          className={`${style} text-[14px] mt-1 px-2 `}
                        >
                          {option.label}
                        </option>
                      );
                    })}
                  </select>
                ) : null}

                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedCategories.map((value) => {
                    const label =
                      categoryOptions.find((o) => o.value === value)?.label ||
                      value;
                    return (
                      <div
                        key={value}
                        className="flex items-center gap-1  text-primary-black rounded px-2 py-1 text-sm"
                      >
                        <span
                          className={`  ${
                            value === "sidewalk_shed"
                              ? "text-primary-green"
                              : value === "scaffold"
                              ? "text-primary-yellow"
                              : value === "shoring"
                              ? "text-primary-purple"
                              : ""
                          }`}
                        >
                          •
                        </span>
                        {label}
                        <button
                          type="button"
                          onClick={() => removeCategory(value)}
                          className="ml-1 bg-primary-red text-primary-white hover:text-red-300 cursor-pointer"
                          aria-label={`Remove ${label}`}
                        >
                          <FaTimes />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  name="status"
                  className="w-full bg-primary-gray rounded px-3 py-2 text-sm cursor-pointer focus:outline-none focus:ring focus:ring-primary-blue"
                >
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-end">
              <ActionButton
                label="Cancel Changes"
                padding="px-4 py-2"
                bgClass="bg-primary-red"
                textClass="text-primary-white"
                type="button"
                onClick={onClose}
                cursor="cursor-pointer"
                icon={FaTimes}
              />

              <ActionButton
                label="Save Changes"
                padding="px-4 py-2"
                bgClass="bg-primary-green"
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

export default Modal;
