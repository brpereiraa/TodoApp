import "./style.css";
import {Todo} from "../components/todo";
import jsonData from "../data.json";
import React, { useState } from "react";

export const Index = (props:any) => {
  const [data, setData] = useState(jsonData);
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-gray-800 to-gray-700">
      <h1 className="text-5xl font-bold text-center pt-12 bg-gradient-to-r from-gray-100 to-blue-300 bg-clip-text text-transparent w-2/4 m-auto">
        To Do App
      </h1>
      <div className="w-3/4 m-auto mt-8 rounded">
        <p className="text-white">Added new task: </p>
        <input className="p-2 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent drop-shadow"/>
        <button className="ml-2 p-2 px-5 rounded bg-purple-200 hover:bg-purple-700 
          hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 
          focus:ring-opacity-50"> Add </button>
      </div>
      <div className="pt-10 w-3/4 m-auto">
        {data.map((info:any) => (
          <Todo name={info.name}/>
        ))}
      </div>
    </div>
  )
};
