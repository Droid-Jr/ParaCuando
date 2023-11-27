import React from 'react';
import Contenido from '../components/Contenido';
import Carrusel from './Carrussel';

function Home() {
  return (
    <div>
      <div>
        {/* Aquí se incluye el componente Contenido */}
        <Carrusel/>
        <Contenido />
        
      </div>
    </div>
  );
}

export default Home;
