import { useRef } from "react";
import { useNavigate } from "react-router-dom";


function Register(){
     const usernameRef = useRef();
     const passwordRef = useRef();
     const password2Ref = useRef();
     const emailRef = useRef();
     const loadingRef = useRef();
     const navigate = useNavigate();

     const validateEmail = (email) => {
          return String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };
     function Validate(){

          if(usernameRef.current.value.length < 3){
               alert('username is not valid');
               usernameRef.current.focus();
               usernameRef.current.style.outlineColor='red'
               return false;
          }

          if(!validateEmail(emailRef.current.value)){
               alert('Email is not valid');
               emailRef.current.focus();
               emailRef.current.style.outlineColor='red'
               return false;
          }

          if(passwordRef.current.value.length < 3){
               alert('Password is not valid');
               passwordRef.current.focus();
               passwordRef.current.style.outlineColor='red'
               return false;
          }
          if(passwordRef.current.value != password2Ref.current.value){
               alert('password is not the same');
               password2Ref.current.focus();
               password2Ref.current.style.outlineColor='red'
               return false;
          }

          return true;
     }


     function headleRegister(event){
          event.preventDefault();

          const isValid = Validate();
          if(!isValid){
               return;
          }
          const user = {

               username: usernameRef.current.value,
               email: emailRef.current.value,
               password: passwordRef.current.value
          }
          fetch("https://auth-rg69.onrender.com/api/auth/signup",{
               method: 'POST',
               headers: {
                    'Content-type': "application/json",
               },
               body: JSON.stringify(user)
          })
          .then(res=> res.json())
          .then(data=> {
               if(data.message == "User registered successfully!"){
                    navigate("/login");
               }
               if(data.message == "Failed! Username is already in use!" || data.message == "Failed! Email is already in use!"){
                    alert(data.message)
               }
          })
          .catch(err=> {
               console.log(err)
          })
      }
     return(
      <div className="mt-20 mx-auto w-[300px] flex flex-col items-center gap-2">
     <h1 className="text-3xl font-bold text-white mb-10">Register</h1>
     <input ref={usernameRef} type="text" className="px-2 outline-transparent border-[2px] border-transparent focus:outline-gray-400 rounded w-full py-1" placeholder="Enter Username ..." />
     <input ref={emailRef} type="email" className="px-2 outline-transparent border-[2px] border-transparent focus:outline-gray-400 rounded w-full py-1" placeholder="Enter Email ..." />
     <input ref={passwordRef} type="password" placeholder="Enter password ***" className="px-2 outline-transparent focus:outline-gray-400 rounded w-full py-1" />
     <input ref={password2Ref} type="password" placeholder="Enter password ***" className="px-2 outline-transparent focus:outline-gray-400 rounded w-full py-1" />
     <button onClick={headleRegister} className=" w-2/3 rounded mt-5 font-bold border-transparent hover:text-white border-2 hover:bg-green-500 hover:border-green-800 py-1 bg-green-400 text-2xl">Register</button>
     </div>
     )
}

export default Register;
