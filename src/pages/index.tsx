import "./style.css";
import "../components/todo";

export const Index = (props:any) => {
  const data = require("../data.json");
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-gray-800 to-gray-700">
      <h1 className="text-5xl font-bold text-center pt-12 text-white">
        To Do App
      </h1>
      <div className="w-3/4 h-3/4 m-auto mt-8 rounded">
        <p className="text-white">Added new to do: </p>
        <input className="p-1 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent drop-shadow"/>
        <button className="ml-2 p-1 px-5 rounded bg-purple-200 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"> Add </button>
      </div>
    </div>
  )
};
