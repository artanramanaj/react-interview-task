import { Input } from "./index";
import emptyimg from "../assets/images/empty.png";
import { FaTimes } from "react-icons/fa";
const Empty = () => {
  return (
    <main className="ml-72 min-h-[50vh]  m-2 rounded-md  shadow-[0_0_8px_rgba(0,0,0,0.3)]">
      <div className="bg-primary-gray grid grid-cols-1 py-4 gap-2 items-center px-4 md:my-0 lg:grid-cols-2  ">
        <p className="text-[13px] text-center text-primary-black font-semibold md:text-start">
          Data Grid
        </p>
        <div className=" flex flex-col gap-2 items-center justify-end  lg:flex-row">
          <Input
            type="text"
            padding="py-1 px-4"
            width="w-1/3"
            placeholder="Search a driver"
            border="border-primary-border-gray border-[1px] rounded"
          />
          <FaTimes />
        </div>
      </div>
      <section className="pt-8 text-center   rounded-lg flex flex-col justify-center items-center h-full">
        <img src={emptyimg} alt="empty" />
        <p className="text-gray-500">No Service Selected</p>
        <p className="text-gray-400">
          Please select a service on your left to proceed.
        </p>
      </section>
    </main>
  );
};

export default Empty;
