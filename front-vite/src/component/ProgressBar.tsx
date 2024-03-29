import React from 'react';

export default function ProgressBar({
  max,
  value,
  text,
}: {
  max: number;
  value: number;
  text?: string;
}) {
  return (
    <div className="bg-main-blue bg-opacity-60 rounded-full w-full h-7 flex relative">
      <div
        className="bg-main-blue m-0.5 rounded-full transition-all duration-600 ease-in-out"
        style={{ width: `${(value / max) * 100}%` }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm">
        {`${text}${value}/${max}`}
      </div>
    </div>
  );
}

ProgressBar.defaultProps = {
  text: '',
};
