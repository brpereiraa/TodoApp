export const Todo = (props:any) => {
  const handleDelete = () => {
    props.delete(props.id);
  }

  return (
    <div className="drop-shadow-lg bg-gray-900 px-3 border-solid border-white border-t-2 border-r-2 border-l-2 rounded py-3 mb-3 flex justify-between">
      <h1 className="text-xl text-white">
        <span className="font-bold">Task: </span> 
        {props.name}
      </h1> 
      <button className="bg-transparent hover:bg-red-500 text-red-400 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" onClick={handleDelete}>delete</button>
    </div>
  )
}
