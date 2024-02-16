import React, { useEffect, useState } from "react";

const Frontend = () => {
  const [city, setCity] = useState("null");
  const [search, setSearch] = useState("Dhaka");

  useEffect(() => {
    const fetchapi = async () => {
      const API = http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d943087feaa4c1a4dd168b1c2375c06a;

      const response = await fetch(API);
      const resjson = await response.json();

      setCity(resjson.main);
    };

    fetchapi();
  }, [search]);

  return (
    <div className="bg-blue-50 h-screen rounded-md flex flex-col justify-center items-center">
      <div className=" absolute rounded-md bg-blue-200 h-5/6 w-2/5 space-y-6 flex flex-col justify-center items-center  ">
        <input
          type="text"
          className="py-2 px-2 rounded-full focus:outline-none align-middle"
          onChange={(input) => {
            setSearch(input.target.value);
          }}
        />

        {!city ? (
          <p>NO DaTa Found</p>
        ) : (
          <div className="rounded-md bg-blue-200 flex flex-col justify-center items-center ">
            <h1 className="uppercase font-bold font-serif text-4xl text-blue-900">
              {search}
            </h1>
            <p className="font-medium text-3xl font-serif text-blue-900">
              {city.temp}&#8451;
            </p>
            <p className="pt-6 pb-20 font-sm text-sm font-serif text-blue-900">
              MIN: {city.temp_min}&#8451; | MAX : {city.temp_max}
              &#8451;
            </p>
            <svg
              className="animate-bounce w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#0099ff"
                fill-opacity="1"
                d="M0,64L48,96C96,128,192,192,288,186.7C384,181,480,107,576,117.3C672,128,768,224,864,250.7C960,277,1056,235,1152,197.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Frontend;