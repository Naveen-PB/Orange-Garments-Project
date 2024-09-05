import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`bg-gray-200 md:h-screen md:w-48 ${isOpen ? 'md:w-[12rem]' : ''}`}>
            <div className="p-4">
                <h2 className="font-bold mb-4 flex justify-between items-center">
                    Sidebarss
                    <button className="md:hidden" onClick={toggleSidebar}>
                        {isOpen ? 'Close' : 'Open'}
                    </button>
                </h2>
                <ul>
                    <li className="py-2">
                        <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="py-2">
                        <Link to="/admindashboard/allusers">All Users</Link>
                    </li>
                    <li className="py-2">
                        <Link to="/admindashboard/adminSales">Sales</Link>
                    </li>
                    <li className="py-2">
                        <Link to="/admindashboard/inventory">Inventory</Link>
                    </li>
                    <li className="py-2">
                        <Link to="/admindashboard/announcement">Announcement</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
