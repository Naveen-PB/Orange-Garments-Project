import { useState, useEffect } from "react";
import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import RecentOrders from "./RecentOrders";

export default function Admindashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDesktopView, setIsDesktopView] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsDesktopView(window.innerWidth >= 768);
    };

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const handleLogout = () => {
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleListClick = () => {
    if (!isDesktopView) {
      setIsSidebarVisible(false);
    }
  };

  const allowedRoutes = ["/admindashboard"];
  const showStatisticsCards = allowedRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col md:flex-row w-full">
      {isDesktopView && (
        <div className="bg-gray-200 md:h-screen md:w-[12rem] leading-10 flex-shrink-0">
          <div className="p-4">
            <h2 className="font-bold text-3xl mb-4 flex justify-between items-center">
              Admin Dashboard
            </h2>
            <ul className=" text-2xl">
              <li className="py-2 hover:bg-blue-950 hover:text-white hover:duration-500 rounded-md mb-1">
                <Link to="/admindashboard" onClick={handleListClick}>
                  Dashboard
                </Link>
              </li>
              <li className="py-2 hover:bg-blue-950 hover:text-white hover:duration-500 rounded-md mb-1">
                <Link to="/admindashboard/allusers" onClick={handleListClick}>
                  All Users
                </Link>
              </li>
              <li className="py-2 hover:bg-blue-950 hover:text-white hover:duration-500 rounded-md mb-1">
                <Link
                  to="/admindashboard/adminSales"
                  onClick={handleListClick}
                >
                  Sales
                </Link>
              </li>
              <li className="py-2 hover:bg-blue-950 hover:text-white hover:duration-500 rounded-md mb-1">
                <Link
                  to="/admindashboard/inventory"
                  onClick={handleListClick}
                >
                  Inventory
                </Link>
              </li>
              {/* <li className="py-2 hover:bg-blue-950 hover:text-white hover:duration-500 rounded-md mb-1">
                <Link
                  to="/admindashboard/announcement"
                  onClick={handleListClick}
                >
                  Announcement
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      )}

      <div className="flex-grow w-96">
        <nav className="bg-gray-300 h-14 px-4 py-3 flex justify-between items-center">
          {!isDesktopView && (
            <button
              onClick={toggleSidebar}
              className="ml-4 text-blue-950 text-xl hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          )}
          <button
            onClick={handleLogout}
            className="bg-white border text-black px-4 py-1 rounded-md hover:bg-blue-950 hover:text-white"
          >
            Logout
          </button>
        </nav>

        <div className="p-4">
          {showStatisticsCards && (
            <>
              <div className="flex flex-wrap bg-white xl:pb-5 xl:pt-5">
                <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                      <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                          <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                            Traffic
                          </h5>
                          <span className="font-semibold text-xl text-blueGray-700">
                            334,100
                          </span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                            <i className="fas fa-chart-bar"></i>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-blueGray-400 mt-4">
                        <span className="text-emerald-500 mr-2">
                          <i className="fas fa-arrow-up"></i> 2.99%
                        </span>
                        <span className="whitespace-nowrap">
                          Since last month
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Other cards follow similar structure */}
              </div>
              <RecentOrders />
            </>
          )}
          <div>
            <Dashboard />
          </div>
          <Outlet />
        </div>
      </div>

      {!isDesktopView && isSidebarVisible && (
        <div className="bg-gray-200 absolute top-0 left-0 w-full h-full md:hidden">
          <div className="p-4">
            <h2 className="font-bold mb-4 flex justify-between items-center">
              Admin Dashboard
              <button
                onClick={toggleSidebar}
                className="text-blue-500 hover:underline"
              >
                Close
              </button>
            </h2>
            <ul>
              <li className="py-2 hover:bg-blue-950 hover:text-white">
                <Link
                  to="/admindashboard"
                  onClick={() => {
                    handleListClick();
                    toggleSidebar();
                  }}
                >
                  Dashboard
                </Link>
              </li>
              <li className="py-2 hover:bg-blue-950 hover:text-white">
                <Link
                  to="/admindashboard/allusers"
                  onClick={() => {
                    handleListClick();
                    toggleSidebar();
                  }}
                >
                  All Users
                </Link>
              </li>
              <li className="py-2 hover:bg-blue-950 hover:text-white">
                <Link
                  to="/admindashboard/adminSales"
                  onClick={() => {
                    handleListClick();
                    toggleSidebar();
                  }}
                >
                  Sales
                </Link>
              </li>
              <li className="py-2 hover:bg-blue-950 hover:text-white">
                <Link
                  to="/admindashboard/inventory"
                  onClick={() => {
                    handleListClick();
                    toggleSidebar();
                  }}
                >
                  Inventory
                </Link>
              </li>
              <li className="py-2 hover:bg-blue-950 hover:text-white">
                <Link
                  to="/admindashboard/announcement"
                  onClick={() => {
                    handleListClick();
                    toggleSidebar();
                  }}
                >
                  Announcement
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
