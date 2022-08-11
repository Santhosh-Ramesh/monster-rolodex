import React from 'react';
import './search-box.styles.css';
import {ChangeEvent} from 'react';




type SearchBoxProps = {
  className: string;
  placeholder?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}


export const SearchBox = ({placeholder,handleChange,className}: SearchBoxProps) => {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

