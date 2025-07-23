"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, File, Shield } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

function SideNav({ closeSideBar }) {
  const router = useRouter(); // 👈 get router instance

  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: File,
      path: "/files",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="shadow-sm border-r h-full bg-white">
      <div className="p-5 border-b flex items-center justify-center">
        <Image src="/logo.svg" alt="Logo" width={150} height={100} />
      </div>
      <div className="flex flex-col">
        {menuList.map((item, index) => (
          <button
            key={item.id}
            className={clsx(
              "flex items-center gap-3 px-6 py-4 w-full text-sm font-medium transition-all duration-200",
              activeIndex === index
                ? "bg-violet-100 text-violet-700"
                : "text-gray-600 hover:bg-gray-50 hover:text-violet-600"
            )}
            onClick={() => {
              setActiveIndex(index);
              router.push(item.path); // 👈 navigate to path
              if (typeof closeSideBar === "function") closeSideBar();
            }}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNav;

