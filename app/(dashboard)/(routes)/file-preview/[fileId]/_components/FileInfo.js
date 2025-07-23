import Image from 'next/image';
import React from 'react';

function FileInfo({ file }) {
  return file ? (
    <div className="text-center border flex justify-center m-4 flex-col items-center p-2 rounded border-blue-200">
      <Image
        src="/file.png"
        alt="File Icon"
        width={200}
        height={200}
        className="h-[200px] rounded-md object-contain"
      />
      <p className="mt-2 text-gray-600">{file?.fileName || 'Unknown File'}</p>
    </div>
  ) : (
    <div className="text-gray-500">No file to display</div>
  );
}

export default FileInfo;
