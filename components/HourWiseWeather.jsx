'use client';

import { weatherContext } from '@/utils/WeatherContext';
import { useContext } from 'react';
import Image from 'next/image';

const getHour = (date) => {
  const hour = Number(date.split(' ')[1].split(':')[0]);
  let str = '';
  if (hour >= 12) {
    if (hour > 12) {
      str = `${hour - 12} PM`;
    } else {
      str = `${hour} PM`;
    }
  } else {
    str = `${hour ? hour : 12} AM`;
  }
  return str;
};

const HourWiseWeather = () => {
  const { data } = useContext(weatherContext);
  return (
    <div className="">
      Today at
      <div className="flex gap-3 overflow-x-scroll md:flex-wrap py-3 scroll xl:justify-around">
        {data?.forecast?.forecastday[0]?.hour?.map((element, index) =>
          index % 2 ? (
            <div
              className="bg-gray-100 dark:bg-light-black p-4 rounded-xl flex-wrap min-w-[5rem] text-center"
              key={element?.time_epoch}
            >
              <p>{getHour(element?.time)}</p>
              <Image
                src={`https:${element?.condition?.icon}`}
                width={15}
                height={15}
                alt={element?.condition?.text}
                className="mx-auto my-3"
              />
              <p>{element?.temp_c}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default HourWiseWeather;
