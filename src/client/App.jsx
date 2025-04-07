import React, { useEffect } from 'react';
import Scene from './Scene';

const App = () => {


    return ( 
        <div>
        <div className="p-10 bg-red-500 text-white text-2xl">
        If this text is red, Tailwind is working... frfrfr
      </div>
      <div style={{ width: '100vw', height: '100vw' }}>
      <Scene/>
      </div>
      </div>

    )
};

export default App;