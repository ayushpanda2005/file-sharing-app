import React from 'react';
// Assuming the correct import for the "X" icon or button
import { X } from 'lucide-react'; // Update based on the actual icon name in lucid-react

function FilePreview({ file, removeFile }) {
  if (!file) {
    return <p>No file selected</p>;
  }

  const filePreviewUrl = URL.createObjectURL(file);

  return (
    <div className="flex items-center relative border p-4 rounded-md justify-center">
      <img
        src={filePreviewUrl}
        alt={file.name}
        width={50}
        height={50}
        style={{ objectFit: 'contain' }}
      />
      <div className="flex items-center gap-2 mt-2">
        <h2 className="font-semibold">{file.name}</h2>
        <p>Size: {(file.size / 1024 / 1024).toFixed(2)} MB</p>
        <p className="text-[12px] text-gray-400">Type: {file.type}</p>
      </div>
     
        <X size={32} className="text-red-500 cursor-pointer" onClick={() =>removeFile()}/> {/* Adjust size or color based on your design */}
      
    </div>
  );
}

export default FilePreview;
