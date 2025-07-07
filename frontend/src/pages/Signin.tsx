import { Quote } from "../components/Quote"
import { SignupForm } from "../components/Form";

export const Signin = () => {
  return ( 
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <SignupForm type="signin"/>
      <div className="hidden lg:block">
        <Quote />
      </div> 
    </div>
  );
};
