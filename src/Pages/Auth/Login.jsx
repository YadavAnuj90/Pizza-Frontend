import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {login} from '../../Redux/Slices/AuthSlice'
import LoginPresentation from "./LoginPresentation";
import { useNavigate } from "react-router-dom";

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState ({

          email: '',
          password: ''

    });
    
    function handleUserInput(e){
        const {name, value} = e.target;
        setLoginData({
         ...loginData,
         [name] :value
        })
 
      }
      async function handleFormSubmit(e) {
        e.preventDefault(); //prevent the form
        console.log(loginData);

        //Add validation 
    if(!loginData.email  || !loginData.password )  {
          toast.error("Missing value from the form");
          return;
          
    }  
    //cheak email 
    if(!loginData.email.includes('@') || !loginData.email.includes('.')){
       toast.error("Invalid email address")
       return;
    }
    
    const apiResponse = await dispatch(login(loginData));
     console.log("Api response" , apiResponse);
     if(apiResponse.payload.data.success){
        navigate('/');
     }
  
}
   
return (

    <LoginPresentation handleFormSubmit= {handleFormSubmit} handleUserInput={handleUserInput}  />
   )     

}

export default Login;