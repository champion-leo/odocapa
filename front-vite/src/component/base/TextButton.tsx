import React from 'react';
import classNames from 'classnames';

interface TextButtonProp {
  color?: string;
  textColor?: string;
  size?: 's' | 'md' | 'lg';
  text: string;
  available?: boolean;
  onClick: () => void;
}

const defaultProps = {
  size: 'md',
  color: 'bg-slate-100',
  textColor: 'text-main-blue',
  available: true,
};

export default function TextButton({
  color,
  text,
  textColor,
  size,
  available,
  onClick,
}: TextButtonProp) {
  let sizeClass;
  switch (size) {
    case 's':
      sizeClass = 'px-2 py-0.5 text-sm rounded-full';
      break;
    case 'lg':
      sizeClass = 'px-6 py-2 text-md';
      break;
    case 'md':
    default:
      sizeClass = 'px-3 py-0.5';
  }
  return (
    <button
      className={classNames('block rounded-full', sizeClass, color, textColor, {
        'opacity-70': !available,
        'cursor-default': !available,
      })}
      type="button"
      onClick={() => {
        if (available) onClick();
      }}
    >
      {text}
    </button>
  );
}

TextButton.defaultProps = defaultProps;
