import React from 'react';

function ProgressBar({ progress }) {
  return (
    <div className="bg-gray-300 w-full mt-3 h-3 rounded-full">
      <div
        className="bg-[#8A9EFF] h-3 rounded-full text-[10px] text-white flex items-center justify-center"
        style={{ width: `${progress}%` }}
      >
        {`${Number(progress).toFixed(0)}%`}
      </div>
    </div>
  );
}

export default ProgressBar;
