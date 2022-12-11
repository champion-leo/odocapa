import classNames from 'classnames';
import { has } from 'lodash';
import React from 'react';

interface ColorPickerProps {
  color: string;
  size: number;
  shape?: 'circle' | 'square';
  scale?: 'full' | 'half';
  selected?: boolean;
}

export default function ColorPicker({ color, size, shape, scale, selected }: ColorPickerProps) {
  return (
    <div
      className={classNames('border p-0.5 border-black', {
        'rounded-full': shape === 'circle',
      })}
      style={{ width: size, height: size }}
    >
      <div
        className={classNames('w-full h-full transition-transform duration-300', {
          'scale-0': !selected,
          'scale-50': selected && scale === 'half',
          'rounded-full': shape === 'circle',
        })}
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

ColorPicker.defaultProps = {
  scale: 'full',
  shape: 'circle',
  selected: true,
};
