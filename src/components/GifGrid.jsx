import { GifItem } from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {
  /* estp ta mal porque se dibuja siempre que cambia el state getGifs(category); */

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      
      {
        /* isLoading ? ( <h2>Cargando...</h2> ) : null */
        isLoading && ( <h2>Cargando...</h2> )
      }
      
      <div className='card-grid'>
        {images.map((img) => (
          <GifItem key={img.id} {...img}/>
        ))}
      </div>
    </>
  );
};
