"use client";

import { AlignJustify } from 'lucide-react';
import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import { UserButton } from '@clerk/nextjs'; // Import UserButton from Clerk

function TopHeader() {
  return (
    <div className="flex p-5 border-b items-center justify-between md:justify-end">
      <AlignJustify className="md:hidden" />
      <Image src="/logo.svg" alt="Logo" width={150} height={100} className="md:hidden" />
      <UserButton />
    </div>
  );
}

export default TopHeader;
