import React, { useEffect, useState } from 'react';
import BaseSelect from './BaseSelect';
import Button from './Button';
import TextInput from './TextInput';

interface SelectScrapWikiProp {
  values: string[];
  onSearch: (value: string) => void;
}

export default function SelectScrapWiki({ values, onSearch }: SelectScrapWikiProp) {
  const [selectValue, setSelectValue] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  useEffect(() => setSelectValue(values[0]), [values]);
  return (
    <div className="w-full gap-1" style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="w-1/2 gap-1" style={{ display: 'flex', flexDirection: 'column' }}>
        <BaseSelect
          name="wikitreetName"
          value={selectValue}
          values={values}
          onChange={(name, value) => setSelectValue(value)}
        />
        <Button text="search" onClick={() => onSearch(selectValue)} />
      </div>
      <div className="w-1/2 gap-1" style={{ display: 'flex', flexDirection: 'column' }}>
        <TextInput
          id="test"
          name="search"
          value={inputValue}
          onChange={(name, value) => setInputValue(value)}
        />
        <Button text="search" onClick={() => onSearch(inputValue)} />
      </div>
    </div>
  );
}