"use client";

import { AlignJustify } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

function TopHeader() {
  return (
    <div className="flex p-5 border-b items-center justify-between md:justify-end bg-gradient-to-r from-orange-50 via-orange-100 to-purple-50">
      <AlignJustify className="md:hidden text-gray-700" />
      <Image
        src="/logo.svg"
        alt="Logo"
        width={150}
        height={100}
        className="md:hidden"
      />
      <UserButton />
    </div>
  );
}

export default TopHeader;
