import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const addedValue = inputValue.trim();
    if (addedValue.length <= 1) {
      return;
    }
    //onAddCategory((cat) => [...cat, addedValue]);
    onNewCategory(addedValue);
    setInputValue('');
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Search something here."
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};

