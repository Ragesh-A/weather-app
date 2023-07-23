'use client';

import { weatherContext } from '@/utils/WeatherContext';
import { useContext } from 'react';

const CurrentPlace = () => {
  const { data } = useContext(weatherContext);

  return (
    <div className="bg-gray-200 dark:bg-light-black p-3 rounded-xl flex flex-col md:flex-row gap-2 justify-around">
      <p className="md:border-r-2 text-center flex-1 border-gray-500">
        {data?.location?.country}
      </p>
      <p className="md:border-r-2 text-center flex-1 border-gray-500">
        {data?.location?.name}
      </p>
      <p className="text-center flex-1">{data?.location?.tz_id}</p>
    </div>
  );
};

export default CurrentPlace;
