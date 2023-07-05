import "./style.css";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const nav = () => navigate("/");
  return (
    <div className="flex justify-center bg-gradient-to-r from-gray-800 to-gray-700 h-screen w-screen">
      <div className="m-auto h-auto text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text transition transform ease-in-out duration-300">
        <p className="text-xl font-bold text-red-100">Error 404</p>
        <p className="text-8xl font-bold text-red-400 text-transparent font-sans">
          &lt;Page not found/&gt;
        </p>
        <p className="w-2/4 m-auto text-3xl mt-4 text-red-200 transition transform ease-in-out duration-150 hover:text-red-400 hover:underline hover:cursor-pointer" onClick={nav}>
          Go back to root page.
        </p>
      </div>
    </div>
  )
}
