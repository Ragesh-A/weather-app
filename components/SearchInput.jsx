'use client';

import { weatherContext } from '@/utils/WeatherContext';
import React, { useState, useContext, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { API_KEY } from '@/constant/constant'

const SearchInput = () => {
  const { setData } = useContext(weatherContext);
  const [location, setLocation] = useState('india');

  const handleSearch = async (event) => {
    event && event.preventDefault();
    const search = location.trim();

    if (search) {
      try {
        const Url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${search}&days=1&aqi=yes&alerts=yes`;
        const response = await fetch(Url);
        const data = await response.json();
        if (!data.error) {
          setData(data);
          setLocation('')
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  useEffect(()=>{
    handleSearch()
  }, [])
  

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center bg-gray-100 dark:bg-light-black md:max-w-[350px] xl:w-[500px] px-4 rounded md:rounded-3xl py-2 gap-4 md:mx-3 dark:text-gray-300"
    >
      <BsSearch />
      <input
        type="text"
        placeholder="Search City"
        className="bg-transparent outline-none"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
