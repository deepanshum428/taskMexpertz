import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return (
    <div>
      <Outlet />
      <div className="flex justify-around text-blue-500 border ">
        <NavLink to={"/"}>
          <div className="bg-black px-2 py-1 rounded">Previous</div>
        </NavLink>
        <NavLink to={"/story"}>
          <div className="bg-black  px-2 py-1 rounded">Next</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Layout;
