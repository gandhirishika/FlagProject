import React, { useEffect, useState } from "react";
import Card from "./Card";

const MainContainer = () => {
  const [datas, setDatas] = useState([]);
  const [filters, setFilter] = useState([]);
  const [input, setInput] = useState("");
  const [option, setOption] = useState([]);
  const [value, setValue] = useState("");
  const [dark,setDark]=useState(false);

  const getData = async () => {
    const data = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,flags,population"
    );
    const json = await data.json();
    console.log(json, "json data");

    if (json?.length > 0) {
      setDatas(json);

      setFilter(json);
      const arr = json?.map((item, index) => item?.region);
      console.log(arr, "Arr");

      console.log(new Set(arr));
      setOption([...new Set(arr)]);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSearch = () => {
    setFilter(
      datas?.filter((item) =>
        item?.name.common.toLowerCase().includes(input.toLowerCase())
      )
    );
  };
  const handleOption = () => {
    setFilter(datas?.filter((item)=>item?.region.toLowerCase()===value.toLowerCase()));
  };

  const handleMode = () =>{
    setDark(!dark);
  }

  return (
    <>
      <div className="flex justify-evenly">
        <div>
          <input
            className="border-2 w-12% p-2 m-2"
            type="text"
            placeholder="What Country you looking for today?"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white border-2 p-2 "
            onClick={handleSearch}
          >
            Search
          </button>
          <button className="bg-gray" onClick={handleMode}>{!dark?"Dark":"Light"}</button>
        </div>
        <div className="p-2 m-3">
          <select onChange={(e) => setValue(e.target.value)}>
            <option hidden>Select yor option</option>
            {option.map((item, index) => (
              <option>{item}</option>
            ))}
          </select>
          <button onClick={handleOption}>Go</button>
        </div>
      </div>

      <div className="grid grid-cols-4">
        {filters?.map((item, index) => (
          <Card
            key={index}
            capital={item?.capital}
            region={item?.region}
            img={item?.flags?.png}
            name={item?.name?.common}
            population={item?.population}
          />
        ))}
      </div>
    </>
  );
};

export default MainContainer;
