'use client';

import { weatherContext } from '@/utils/WeatherContext';
import { useContext } from 'react';
import IconWithData from './IconWithData';
import { BsFillSunriseFill, BsFillSunsetFill } from 'react-icons/bs';
import { WiHumidity } from 'react-icons/wi'
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa'

const TodayHighLights = () => {
  const { data } = useContext(weatherContext);
  if (!data) return <div className="">loading</div>;

  return (
    <div className="bg-gray-200 dark:bg-light-black p-4 flex-grow rounded-xl">
      <p>Todays HightLights</p>
      <div className="">
        <div className="my-3">
          <div className="bg-gray-100 dark:bg-black flex-1 p-3 rounded-xl">
            <p className="text-gray-500 py-2">Sunrise & Sunset</p>
            <div className="flex flex-col md:flex-row">
              <IconWithData
                icon={<BsFillSunriseFill />}
                label="Sunrise"
                data={data?.forecast?.forecastday[0]?.astro?.sunrise}
              />
              <IconWithData
                icon={<BsFillSunsetFill />}
                label="Sunset"
                data={data?.forecast?.forecastday[0]?.astro?.sunset}
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3 ">
          <IconWithData
            icon={<WiHumidity />}
            label="Humidity"
            data={data?.forecast?.forecastday[0]?.day?.avghumidity}
          />
          <IconWithData
            icon={<FaTemperatureHigh />}
            label="Max temp"
            data={data?.forecast?.forecastday[0]?.day?.maxtemp_c}
          />
          <IconWithData
            icon={<FaTemperatureLow />}
            label="Min temp"
            data={data?.forecast?.forecastday[0]?.day?.mintemp_c}
          />
          <IconWithData
            icon={<WiHumidity />}
            label="Avg Humidity"
            data={data?.forecast?.forecastday[0]?.day?.avghumidity}
          />
        </div>
      </div>
    </div>
  );
};

export default TodayHighLights;
