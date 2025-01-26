


import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='static ml-2.5 rounded-b-md ' >
      {/* Mobile Menu Toggle Button */}
      <button 
        onClick={toggleSidebar} 
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-100 rounded-md"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 6h16M4 12h16M4 18h16" 
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div 
        className={`
          fixed top-0 left-0 h-full w-64 bg-green-50 p-2.5 rounded-b-md shadow-md p-4 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0 z-40
        `}
      >
        <div className="flex flex-col items-center mb-3 absolute top-0 left-20 ">
          <img
            src="http://pluspng.com/img-png/user-png-icon-big-image-png-2240.png"
            alt="Profile"
            className="w-20 h-20 rounded-full "
          />
          <span className="font-medium ">Hey, ABCD</span>
        </div>
        <div className='bg-white rounded-md'>
        <nav className='mt-24'>
          <ul>
            {[
              { icon: 'tasks', text: 'All Tasks', color: 'text-gray-700' },
              { icon: 'clock', text: 'Today', color: 'text-green-600' },
              { icon: 'shield', text: 'Important', color: 'text-gray-700' },
              { icon: 'clipboard', text: 'Planned', color: 'text-gray-700' },
              { icon: 'user', text: 'Assigned to me', color: 'text-gray-700' }
            ].map((item, index) => (
              <li 
                key={index} 
                className="mb-4 group hover:bg-green-100 rounded-lg transition-colors duration-200"
              >
                <a 
                  href="#" 
                  className={`
                    flex items-center font-medium ${item.color} 
                    group-hover:text-green-600 p-2 rounded-lg
                  `}
                >
                  {getIcon(item.icon)}
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        </div>
        

        <div className='bg-white rounded-md mb-3'>
        <div className="mt-4 group hover:bg-green-100 rounded-lg transition-colors duration-200">
          <a 
            href="#" 
            className="flex items-center font-medium text-gray-700 group-hover:text-green-600 p-2 rounded-lg"
          >
            {getIcon('plus')}
            Add list
          </a>
        </div>
        </div>  
        
        <div className='bg-white rounded-md pl-1'>
        <div className="mt-2 text-gray-500 p-1">
          <p>Today Tasks</p>
          <p className="text-2xl font-medium">11</p>
        </div> </div>
        
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          onClick={toggleSidebar} 
          className="md:hidden fixed inset-0 bg-black opacity-50 z-30"
        />
      )}
    </div>
    
  );
};

// Helper function to render icons
const getIcon = (type) => {
  const iconProps = {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5 mr-2",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  };

  const iconPaths = {
    tasks: (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
      </svg>
    ),
    clock: (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    shield: (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    clipboard: (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
      </svg>
    ),
    user: (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>
    ),
    plus: (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
      </svg>
    )
  };

  return iconPaths[type];
};

export default Sidebar;