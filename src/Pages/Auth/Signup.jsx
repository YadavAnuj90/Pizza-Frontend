import { useState } from "react";
import toast from "react-hot-toast";
import SignupPresentation from "./SignupPresentation";

function Signup() {
      
     const [signUpState, setSignUpState] = useState({
        firstName: '',
        email:'',
        mobileNumber: '',
        password: ''
     });

     function handleUserInput(e){
       const {name, value} = e.target;
       setSignUpState({
        ...signUpState,
        [name] :value
       })

     }
     function handleFormSubmit(e) {
             e.preventDefault(); //prevent the form
             console.log(signUpState);

             //Add validation 
         if(!signUpState.email || !signUpState.mobileNumber || !signUpState.password || !signUpState.firstName)  {
               toast.error("Missing value from the form");
               return;
               
         }  
         //cheak email 
         if(!signUpState.email.includes('@') || !signUpState.email.includes('.')){
            toast.error("Invalid email address")
            return;
         }
         //cheak mobile number 
         if(!signUpState.mobileNumber.length <10 || signUpState.mobileNumber.length >12) {
            toast.error("Mobile number should be 10-12 characters")
            return;
         }
             
     }


        return (
            <SignupPresentation  
            handleUserInput={handleUserInput} 
            handleFormSubmit={handleFormSubmit}

            />
        )
}
export default Signup;