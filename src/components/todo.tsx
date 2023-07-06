export const Todo = (props:any) => {
  return (
    <div className="bg-gray-900 px-3 border-solid border-white border-t-2 border-r-2 border-l-2 rounded py-3 mb-3">
      <h1 className="text-xl text-white">Task: {props.name}</h1> 
    </div>
  )
}
