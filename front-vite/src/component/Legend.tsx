import classNames from 'classnames';
import React from 'react';
import { Category, CategoryValue } from '../type/Category';
import ColorPicker from './ColorPicker';

interface LegendProps {
  categorie: Category;
  onSelectValueCategories: (cv: CategoryValue[]) => void;
  selectedValueCategories: CategoryValue[];
}

export default function Legend({
  categorie,
  onSelectValueCategories,
  selectedValueCategories,
}: LegendProps) {
  const onsetSelectValueCategories = (cv: CategoryValue, isAlreadySelected: boolean) => {
    // if (categorie.select === 'single') return isAlreadySelected ? [] : [cv];
    if (selectedValueCategories.length === categorie.values.length) return [cv];
    return isAlreadySelected
      ? selectedValueCategories.filter((scv) => scv.name !== cv.name)
      : selectedValueCategories.concat(cv);
  };
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between mb-2">
        <strong className="">{categorie.name}</strong>
        <div
          className="cursor-pointer pl-4"
          onClick={() => {
            onSelectValueCategories(
              selectedValueCategories.length === categorie.values.length ? [] : categorie.values,
            );
          }}
        >
          <ColorPicker
            color="#334155"
            size={20}
            selected={selectedValueCategories.length > 0}
            scale={selectedValueCategories.length === categorie.values.length ? 'full' : 'half'}
            shape="square"
          />
        </div>
      </div>
      {categorie.values.map((categoryValue) => {
        const isSelected = !!selectedValueCategories.find((scv) => scv.name === categoryValue.name);
        return (
          <div
            className={classNames([
              'flex items-center cursor-pointer',

              {
                'opacity-50': !isSelected,
              },
            ])}
            onClick={() =>
              onSelectValueCategories(onsetSelectValueCategories(categoryValue, isSelected))
            }
          >
            <ColorPicker
              color={categoryValue.color}
              size={20}
              selected={isSelected}
              // shape={categorie.select === 'single' ? 'circle' : 'square'}
              shape="square"
            />
            <div className="pl-2">{categoryValue.name}</div>
          </div>
        );
      })}
    </div>
  );
}
