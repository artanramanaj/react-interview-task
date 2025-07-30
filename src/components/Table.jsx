import { Spinner, ActionButton, InfoButton, Input } from "./index";
import info from "../assets/images/Frame.png";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import customFetch from "../utils/customFetch";

const Table = ({ initialData, onClose }) => {
  const [data, setData] = useState(initialData || []);
  const [hasErrors, setHasErrors] = useState(false);
  const timeoutRef = useRef(null);

  const debounce = (onChange) => {
    return (e) => {
      const value = e.target.value;
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        onChange(value);
      }, 500);
    };
  };

  const handleSearch = async (value) => {
    try {
      const response = await customFetch.get(`/jobsites?search=${value}`);

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
  }, [initialData]);
  return (
    <div className="w-full  bg-primary-gray pb-8 overflow-x-auto rounded-md  shadow-[0_0_8px_rgba(0,0,0,0.3)]">
      <div className="flex justify-between items-center mb-4 w-full bg-primary-dark-gray p-4">
        <p>Title</p>
      </div>
      <div className="grid grid-cols-1 py-4 gap-2  px-4 md:my-0 lg:grid-cols-2 ">
        <div className="flex flex-col items-center gap-2 lg:flex-row">
          <img src={info} alt="info" />
          <p className="text-[13px] text-center md:text-start">
            Informative piece of text that can be used regarding this modal.
          </p>
        </div>

        <div className="w-full flex flex-col gap-2 items-center justify-end  lg:flex-row">
          <Input
            type="text"
            padding="py-1 px-4"
            width="w-full"
            placeholder="Search a driver"
            border="border-primary-border-gray border-[1px] rounded"
            onChange={debounce(handleSearch)}
          />

          <ActionButton
            label="Create"
            bgClass="bg-primary-green"
            padding="py-1 px-6"
            textClass="text-primary-white"
            onClick={onClose}
            cursor="cursor-pointer"
            icon={FaPlus}
          />
        </div>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-primary-dark-gray px-4">
        <thead className="text-xs uppercase bg-primary-gray border-b-2 border-primary-black">
          <tr>
            <th
              scope="col"
              className="text-center px-6 py-2 text-primary-black"
            >
              Jobsite Name
            </th>

            <th
              scope="col"
              className="text-center px-6 py-2 text-primary-black"
            >
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {!data || data.length === 0 || hasErrors ? (
            <tr>
              <td colSpan="3" className="text-center py-4 text-primary-red">
                No Jobs Available
              </td>
            </tr>
          ) : data && data.length > 0 ? (
            data.map((job, index) => (
              <tr
                key={job.id || index}
                className={` ${
                  index % 2 === 0 ? "bg-primary-gray" : "bg-primary-dark-gray"
                } text-primary-black`}
              >
                <td className="px-6 py-2 text-center">
                  <Link
                    className="text-primary-blue"
                    to={`dashboard/sidewalk-shed/${job.id}`}
                  >
                    {job.name}{" "}
                  </Link>
                </td>
                <td className="px-6 py-2 text-center">
                  {job.status == "completed" ? (
                    <InfoButton
                      className="min-w-1/3"
                      label="Completed"
                      bgClass="bg-primary-green"
                      padding="py-2 px-8"
                      textClass="text-primary-white"
                    />
                  ) : job.status == "in_progress" ? (
                    <InfoButton
                      className="min-w-1/3"
                      label="In Progress"
                      bgClass="bg-primary-yellow"
                      padding="py-2 px-8"
                      textClass="text-primary-white"
                    />
                  ) : (
                    <InfoButton
                      className="min-w-1/3"
                      label="On Hold"
                      bgClass="bg-primary-red"
                      padding="py-2 px-8"
                      textClass="text-primary-white"
                    />
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr className="border-b">
              <td colSpan="3" className="text-center py-4">
                <div className="w-full flex items-center justify-center">
                  <Spinner />
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
