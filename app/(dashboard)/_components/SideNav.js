"use client";

import React, { useState } from 'react';
import { Upload, File, Shield } from 'lucide-react';
import Image from 'next/image';

function SideNav({closeSideBar}) {
  const menuList = [
    {
      id: 1,
      name: 'Upload',
      icon: Upload,
      path: '/upload',
    },
    {
      id: 2,
      name: 'Files',
      icon: File,
      path: '/files',
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: Shield,
      path: '/upgrade',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="shadow-sm border-r h-full">
      <div className="p-5 border-5">
        <Image src="/logo.svg" alt="Logo" width={150} height={100} /> {/* Correct usage */}
      </div>
      <div className="flex flex-col">
        {menuList.map((item, index) => (
          <button
            key={item.id}
            className={`flex gap-2 p-4 px-6 hover:bg-gray-100 w-full text-gray-500 ${
              activeIndex === index ? 'bg-blue-50 text-primary' : 'null'
            }`}
            onClick={() => {setActiveIndex(index);closeSideBar()}} // Update the active index
          >
            <item.icon className="w-5 h-5" /> {/* Render the icon */}
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
