import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start">
      <Outlet />
    </div>
  );
};

export default HomeLayout;
