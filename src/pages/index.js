import './style.css';

export const Index = (props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        {props.name}
      </h1>
    </div>
  )
}
