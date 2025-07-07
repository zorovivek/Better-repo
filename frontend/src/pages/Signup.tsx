import { Quote } from "../components/Quote"
import { SignupForm } from "../components/Form";

export const Signup = () => {
  return ( 
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <SignupForm type="signup"/>
      <div className="hidden lg:block">
        <Quote />
      </div> 
    </div>
  );
};
