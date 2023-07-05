import './style.css';

export const NotFound = () =>{
  return (
    <div className="flex justify-center bg-gradient-to-r from-gray-800 to-gray-700 h-screen w-screen">
      <div className="m-auto h-auto text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">
        <p className="text-2xl font-bold text-red-100">404</p>
        <p className="text-8xl font-bold text-red-400 text-transparent font-sans">
          &lt;Page not found/&gt;
        </p>
        <p className="text-3xl mt-4 text-red-200">
          Go to root page or /index.
        </p>
      </div>
    </div>
  )
}
