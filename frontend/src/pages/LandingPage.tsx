import { Link } from "react-router-dom";
import bgImage from "../images/bg-img.webp"

export const LandingPage = () => {
  return (
    <div
    className="min-h-screen bg-center bg-cover lg:bg-contain text-black font-medium"
    style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Top Navigation */}
      <div className="flex justify-between items-center px-12 py-6 border-b border-gray-300 bg-[#f9f7f4]/80 backdrop-blur-md">
        <div className="text-3xl font-serif font-bold tracking-tight">Medium</div>
        <div className="flex items-center space-x-6 text-base">
          <button className="hover:underline">Our story</button>
          <button className="hover:underline">Membership</button>
          <button className="hover:underline">Write</button>
          <Link to={'/signin'}><button className="hover:underline">Sign in</button></Link>
          <Link to={'/signup'}><button className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-800 transition">Get started</button></Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-start px-20 mt-32 max-w-5xl bg-[#f9f7f4]/80 backdrop-blur-md p-10 rounded-lg">
        <h1 className="text-8xl font-serif font-bold leading-[1.1]">
          Human <br /> stories & ideas
        </h1>
        <p className="text-xl text-gray-700 mt-6">
          A place to read, write, and deepen your understanding
        </p>
        <Link to={'/signup'}><button className="mt-10 bg-black text-white rounded-full px-6 py-3 text-lg hover:bg-gray-800 transition">
          Start reading
        </button></Link>
      </div>
    </div>
  );
};
