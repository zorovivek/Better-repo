import { useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const  TextEditor = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="p-8 text-gray-700">
      {/* Title */}
      <div className="flex items-start mb-4">
        <button className="text-3xl font-light mr-4 text-gray-400 hover:text-black">＋</button>
        <div className="relative w-full">
          {title === '' && (
            <div className="absolute left-0 top-0 text-4xl font-serif text-gray-400 pointer-events-none pl-4">
              Title
            </div>
          )}
          <div
            contentEditable
            onInput={(e: React.FormEvent<HTMLDivElement>) => 
                setTitle(e.currentTarget.textContent ?? '')
            }
            className="text-4xl font-serif text-gray-600 outline-none border-l-2 border-gray-200 pl-4 min-w-[200px]"
          ></div>
        </div>
      </div>

      {/* Body */}
      <div className="relative w-full mb-4">
        {content === '' && (
          <div className="absolute left-14 top-0 text-xl font-serif text-gray-400 pointer-events-none">
            Tell your story...
          </div>
        )}
        <div
          contentEditable
          //@ts-ignore
          onInput={(e: React.FormEvent<HTMLDivElement>) => 
            setContent(e.currentTarget.textContent ?? '')
        }
          className="text-xl font-serif text-gray-500 outline-none pl-14 min-h-[200px]"
        ></div>
      </div>

      {/* Post Button aligned left below the body */}
      <div className="mt-4 pl-14">
        <button type="button" onClick={async () => {
            await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content
            },{
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            console.log("Before Navigate")
            navigate('/blogs')
            console.log("After Navigate")
        }} className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2">Publish Post</button>
      </div>
    </div>
  );
};
