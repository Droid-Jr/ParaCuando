import React from 'react';
import Contenido from '../components/Contenido';
import homeCon from '../json/homeCon';

function Home() {
  return (
    <div>
      <div>
        {/* Aquí se incluye el componente Contenido */}
        <Contenido />
        <homeCon/>
      </div>
    </div>
  );
}

export default Home;
