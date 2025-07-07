import type { SignupInput } from "@habibsheikh/medium-common";
import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { BACKEND_URL } from "../config";

export const SignupForm = ({type}: {type: "signup" | "signin"}) => {
  const navigate = useNavigate()
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: ""
  })

  async function sendRequest(){
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup" ? "signup" : "signin"}`, postInputs)
      const jwt = response.data.jwt
      localStorage.setItem("token",jwt)
      navigate("/blogs")
    } catch (e){
      alert("Request Failed")
      // Request Failed
    }
  }

    return <div className="h-screen flex justify-center items-center flex-col">
      <div className="text-3xl font-bold">
        Create an account
      </div>
      <p className="mt-2 text-slate-500">{ type==="signin" ? "Don't have an account?": "Already have an account?"} <Link className="underline pl-1" to={type==="signin" ? "/signup" : "/signin"}>{type==="signin" ? "Sign up" : "Sign in"}</Link></p>
      <div className="mt-1">
        {type==="signup" ? <LabelledInput  label="Username" placeholder="Enter your username" onChange={(e) => {
          setPostInputs((c) => ({
            ...c, // existing inputs
            name: e.target.value
          }))
        }}/> : null}
        <LabelledInput label="Email" placeholder="m@example.com" onChange={(e) => {
          setPostInputs((c) => ({
            ...c, // existing inputs
            email: e.target.value
          }))
        }}/>
        <LabelledInput label="Password" type={"password"} placeholder="" onChange={(e) => {
          setPostInputs((c) => ({
            ...c, // existing inputs
            password: e.target.value
          }))
        }}/>
      </div>
      <div>
        <button onClick={sendRequest} type="button" className= " mt-10 ml-2 min-w-96 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type==="signup" ? "Sign up" : "Sign in"}</button>
      </div>
    </div>
};
interface LabelledInputType {
  label: string,
  placeholder: string,
  type?: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function LabelledInput ({ label, placeholder, type, onChange}: LabelledInputType) {
  return <div className="min-w-sm mt-5">
      <label className=" ml-1 block mb-2 text-sm font-semibold text-black">{label}</label>
      <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
  </div>
}
