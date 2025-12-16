import { Outlet, useLocation } from "react-router-dom";
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
    </div>
  );
};

export default Layout;
