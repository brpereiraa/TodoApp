import './style.css';

export const Index = (props:any) => {
  const data = require("../data.json");
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-gray-800 to-gray-700">
      <h1 className="text-3xl font-bold underline">
        {data[0].name}
      </h1>
    </div>
  )
};
