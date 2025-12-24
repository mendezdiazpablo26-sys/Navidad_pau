
import React, { useEffect, useState } from 'react';

const MiloMeter: React.FC = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(118), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto mt-4 px-4">
      <div className="flex justify-between items-end mb-2">
        <span className="text-[10px] font-mono-tech uppercase tracking-wider text-gray-400">Fluidez de conexión</span>
        <span className="text-[10px] font-mono-tech text-amber-600 font-bold">SINCRONÍA: {width}%</span>
      </div>
      <div className="relative h-2.5 bg-gray-100 rounded-full overflow-visible border border-gray-200/50">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-300 to-amber-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(245,158,11,0.3)]"
          style={{ width: `${Math.min(width, 100)}%` }}
        >
          {width > 100 && (
            <div 
              className="absolute left-full top-0 h-full bg-amber-600 rounded-r-full animate-pulse flex items-center"
              style={{ width: `${width - 100}%` }}
            >
              <div className="ml-2 whitespace-nowrap text-[9px] font-mono-tech text-amber-700 font-bold italic tracking-tighter">
                MÁS ALLÁ DEL PLANO
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="text-[9px] font-mono-tech text-gray-400 mt-3 text-center opacity-60 italic">
        * Sensor de armonía detectando momentos inesperados.
      </p>
    </div>
  );
};

export default MiloMeter;