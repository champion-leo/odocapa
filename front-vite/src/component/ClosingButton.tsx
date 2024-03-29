import React from 'react';

export default function ClosingButton({ onClose, size }: { onClose: () => void; size?: number }) {
  return (
    <button
      type="button"
      className="bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center"
      data-modal-toggle="defaultModal"
      onClick={onClose}
    >
      <svg
        aria-hidden="true"
        width={size}
        height={size}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <span className="sr-only">Close</span>
    </button>
  );
}
ClosingButton.defaultProps = {
  size: 15,
};
