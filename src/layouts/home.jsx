import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="h-screen max-w-md mx-auto">
      <Outlet />
    </div>
  );
};

export default HomeLayout;
