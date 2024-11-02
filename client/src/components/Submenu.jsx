import React, { useState } from 'react';

const Submenu = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="bg-gray-800 -mt-2 mb-1 my-1 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">Logo</h1>
        </div>
        <ul className="flex space-x-4">
          <li className="relative group">
            <a
              href="#"
              className="hover:text-gray-400"
              onMouseEnter={() => handleDropdownEnter(1)}
              onMouseLeave={handleDropdownLeave}
            >
              Hover Me
            </a>
            {activeDropdown === 1 && (
              <div className="absolute mt-0 py-2 bg-gray-700 rounded-lg shadow-md" onMouseEnter={() => handleDropdownEnter(1)} onMouseLeave={handleDropdownLeave}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                  Option 1
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                  Option 2
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                  Option 3
                </a>
              </div>
            )}
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Another Link
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Submenu;


