'use client';

import { weatherContext } from '@/utils/WeatherContext';
import { useContext } from 'react';
import Image from 'next/image';
import IconWithData from './IconWithData';

const TodayHighLights = () => {
  const { data } = useContext(weatherContext);
  if (!data) return <div className="">loading</div>;

  return (
    <div className="bg-gray-200 dark:bg-light-black p-4 flex-grow rounded-xl">
      <p>Todays HightLights</p>
      <div className="">
        <div className="flex flex-col xl:flex-row gap-2 my-3">
          <div className="bg-gray-100 dark:bg-black flex-1 p-3 rounded-xl">
            <p>Sun raise</p>
            <Image
              src={'https://cdn.weatherapi.com/weather/64x64/day/200.png'}
              width={15}
              height={15}
              alt="sun rise"
            />
            <span>{data?.forecast.forecastday[0].astro.sunrise}</span>
          </div>
          <div className="bg-gray-100 dark:bg-black flex-1 p-3 rounded-xl">
            <p className="text-gray-500 py-2">Sunrise & Sunset</p>
            <div className="flex flex-col md:flex-row">
              <IconWithData
                src="https://cdn.weatherapi.com/weather/64x64/day/200.png"
                label="Sunrise"
                data={data.forecast.forecastday[0].astro.sunrise}
              />
              <IconWithData
                src="https://cdn.weatherapi.com/weather/64x64/day/200.png"
                label="Sunset"
                data={data.forecast.forecastday[0].astro.sunset}
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3 ">
          <IconWithData
            src="https://cdn.weatherapi.com/weather/64x64/day/200.png"
            label="Humidity"
            data={data?.forecast.forecastday[0].day.avghumidity}
          />
          <IconWithData
            src="https://cdn.weatherapi.com/weather/64x64/day/200.png"
            label="Max temp"
            data={data?.forecast.forecastday[0].day.maxtemp_c}
          />
          <IconWithData
            src="https://cdn.weatherapi.com/weather/64x64/day/200.png"
            label="Min temp"
            data={data?.forecast.forecastday[0].day.mintemp_c}
          />
          <IconWithData
            src="https://cdn.weatherapi.com/weather/64x64/day/200.png"
            label="Humidity"
            data={data?.forecast.forecastday[0].day.avghumidity}
          />
        </div>
      </div>
    </div>
  );
};

export default TodayHighLights;
