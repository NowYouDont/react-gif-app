import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat, "Valheim"])
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
        //onAddCategory={setCategories}
      ></AddCategory>
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
