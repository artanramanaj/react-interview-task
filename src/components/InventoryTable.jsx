import { useState, useRef, useEffect } from "react";
import { Spinner, Input, InventoryModal } from "./index";
import { FaTimes, FaHamburger } from "react-icons/fa";
import { useInventory } from "../utils/context/InventoryContext";
import customFetch from "../utils/customFetch";

const InventoryTable = ({ modalFlag, setModalFlag }) => {
  const { data: initialData } = useInventory();
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const timeoutRef = useRef(null);
  const [hasErrors, setHasErrors] = useState(false);

  const [showInventoryModal, setShowInventoryModal] = useState(false);
  const [singleRow, setSingleRow] = useState({});

  const handleInventoryModalToggle = (id) => {
    const filteredData = data.find((el) => el.id === id);
    setSingleRow(filteredData);
    setShowInventoryModal(true);
    setModalFlag(true);
  };

  const debounce = (onChange) => {
    return (e) => {
      const value = e.target.value;
      setSearchTerm(value);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        onChange(value);
      }, 500);
    };
  };

  const handleSearch = async (value) => {
    try {
      const response = await customFetch.get(`/inventory?search=${value}`);
      if (response.data) {
        setHasErrors(false);
        setData(response.data);
      }
    } catch (error) {
      setHasErrors(true);
    }
  };

  const clearSearchInput = async () => {
    setSearchTerm("");
    try {
      const response = await customFetch.get("/inventory");

      if (response.data) {
        setHasErrors(false);
        setData(response.data);
      }
    } catch (error) {
      setHasErrors(true);
    }
  };

  useEffect(() => {
    setData(initialData);
    setSearchTerm("");
  }, [initialData]);

  return (
    <>
      {showInventoryModal && modalFlag && (
        <InventoryModal
          data={singleRow}
          onClose={() => setShowInventoryModal(false)}
        />
      )}

      <div className="pb-8 overflow-x-auto ml-0 min-h-[50vh] m-2 rounded-md shadow-[0_0_8px_rgba(0,0,0,0.3)] lg:ml-72 ">
        <div className="bg-primary-gray grid grid-cols-1 py-4 gap-2 items-center px-4 lg:grid-cols-2">
          <p className="text-[13px] text-center text-primary-black lg:text-start font-semibold">
            Sidewalk Shed
          </p>

          <div className="flex flex-col gap-2 items-center justify-end lg:flex-row">
            <Input
              type="text"
              value={searchTerm}
              placeholder="Search a driver"
              padding="py-1 px-4"
              width="w-1/2 lg:w-1/3"
              border="border-primary-border-gray border-[1px] rounded"
              onChange={debounce(handleSearch)}
            />
            <FaTimes
              className="cursor-pointer text-primary-black"
              onClick={() => clearSearchInput()}
            />
          </div>
        </div>

        <table className="w-full text-sm text-left text-primary-dark-gray">
          <thead className="text-xs uppercase bg-primary-white border-b-2 border-primary-black">
            <tr>
              <th className="px-6 py-2 text-primary-black">Nr.</th>
              <th className="px-6 py-2 text-primary-black">Item</th>
              <th className="px-6 py-2 text-primary-black">Quantity</th>
              <th className="px-6 py-2 text-primary-black">Description</th>
              <th className="px-6 py-2 text-primary-black">Notes</th>
            </tr>
          </thead>

          <tbody>
            {!data || data.length === 0 || hasErrors ? (
              <tr>
                <td colSpan="5" className="text-center py-4 text-primary-red">
                  No data Available
                </td>
              </tr>
            ) : (
              data.map((inv, index) => (
                <tr
                  onClick={() => handleInventoryModalToggle(inv.id)}
                  key={inv.id || index}
                  className={`${
                    index % 2 === 0 ? "bg-primary-gray" : "bg-primary-white"
                  } text-primary-black cursor-pointer`}
                >
                  <td className="px-6 py-2">{index + 1}</td>
                  <td className="px-6 py-2">{inv.item}</td>
                  <td className="px-6 py-2">{inv.quantity}</td>
                  <td className="px-6 py-2">{inv.description}</td>
                  <td className="px-6 py-2">{inv.notes}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InventoryTable;
