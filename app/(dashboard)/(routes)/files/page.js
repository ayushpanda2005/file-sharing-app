import { UserButton } from '@clerk/nextjs';
import React from 'react';

function Files() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7faff] to-[#e6f0ff] text-gray-800 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Files</h1>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Files;


