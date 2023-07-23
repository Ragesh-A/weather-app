'use client'

import { createContext, useState } from 'react';
import {fakeData} from './fakedata'

const weatherContext = createContext(null);

const WeatherState = ({ children }) => {
  const [data, setData] = useState(fakeData);
  return (
    <weatherContext.Provider value={{ data, setData }}>
      {children}
    </weatherContext.Provider>
  );
};

export { weatherContext, WeatherState };
