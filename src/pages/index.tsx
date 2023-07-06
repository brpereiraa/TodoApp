import "./style.css";
import {Todo} from "../components/todo";
import jsonData from "../data.json";
import React, { useState, useEffect } from "react";

export const Index = (props:any) => {
  const [data, setData] = useState<any[]>([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if(!value) return;
    addData();
    setValue("");
    console.log()
  }

  const addData = () => {
    const object = { id: data.length + 1, name: value };
    const newData = [...data, object];

    setData(newData);
  }
  
  useEffect(() => {
    // Check if data exists in local storage
    const storedData = localStorage.getItem("myData");
    console.log(storedData);
    if (storedData && storedData !== "[]") {
      setData(JSON.parse(storedData));
    } else {
      // Set initial data from JSON file
      setData(jsonData);
    }
  }, []);
  
  useEffect(() => {
    if(data.length) localStorage.setItem("myData", JSON.stringify(data));
  }, [data, handleSubmit]);

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-gray-800 to-gray-700">
      <h1 className="text-5xl font-bold text-center pt-12 bg-gradient-to-r from-gray-100 to-blue-300 bg-clip-text text-transparent w-2/4 m-auto">
        To Do App
      </h1>
      <div className="w-3/4 m-auto mt-8 rounded">
        <form onSubmit={handleSubmit}>
          <p className="text-white">Add new task: </p>
          <input className="p-2 rounded border border-transparent 
            focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent drop-shadow"
            type="text" value={value} onChange={e => setValue(e.target.value)}/>
          <button type="submit" className="ml-2 p-2 px-5 rounded bg-purple-200 hover:bg-purple-700 
            hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 
            focus:ring-opacity-50"> Add </button>
        </form>
      </div>
      <div className="pt-10 w-3/4 m-auto border-solid border-white">
        {data.map((info:any) => (
          <Todo name={info.name}/>
        ))}
      </div>
    </div>
  )
};
