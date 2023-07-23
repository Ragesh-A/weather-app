'use client';

import { useContext, useEffect, useState } from 'react';
import { weatherContext } from '@/utils/WeatherContext';
import Image from 'next/image';

const TodayWeather = () => {
  const { data } = useContext(weatherContext);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (data) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  });

  return (
    <div className="flex flex-col bg-gray-100 dark:bg-light-black p-4 rounded-xl min-h-[15rem] md:min-w-[350px] relative overflow-hidden">
      {!data ? (
        <div className="absolute w-full h-full bg-red-500 top-0 left-0" />
      ) : (
        <>
          <p className="text-2xl font-bold">Today</p>
          <p className="text-gray-400 py-3 text-sm">
            {data?.current?.condition?.text}
          </p>
          <div className="flex-grow grid grid-cols-2 place-items-center h-ful">
            <div className="border-r-2 border-gray-500 p-3">
              <p className="text-5xl md:text-6xl">
                <span className="font-bold">{data?.current?.temp_c}</span>°c
              </p>
            </div>
            <Image
              src={`https:${data?.current?.condition?.icon}`}
              width={100}
              height={100}
              alt=""
            />
          </div>
          <p className="text-gray-500 text-sm">
            <span className="font-semibold tracking-wider">wind:</span> &nbsp;
            {data?.current?.wind_kph} kph
          </p>
        </>
      )}
    </div>
  );
};

export default TodayWeather;
