import './style.css';

export const Index = (props) => {
  const data = require("../data.json");
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        {data[0].name} {props.name}
      </h1>
    </div>
  )
}
