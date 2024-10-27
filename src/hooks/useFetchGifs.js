import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getImages = async (category) => {
    const images = await getGifs(category);
    setImages(images);
    setisLoading(false);
  };

  useEffect(() => {
    getImages(category);
  }, []);

  return {
    images,
    isLoading,
  };
};

export default useFetchGifs;
