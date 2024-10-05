import { useRef } from "react";

function NewCard({onsubmit}){
     const nameRef=useRef();
     const descriptionRef=useRef();
     const priceRef=useRef();
     const createdatRef=useRef();
     const updatedatRef=useRef();


     function Validate(){

          if(nameRef.current.value.length < 3){
               alert('name is not ');
               nameRef.current.focus();
               nameRef.current.style.outlineColor='red'
               return false;
          }
          return true;
     }
     function headleClick(event){
          event.preventDefault();

          const isvalid = Validate();
          if(!isvalid){
               return;
          }

          const user = {
               name: nameRef.current.value,
               description: descriptionRef.current.value,
               price: priceRef.current.value,
               createdat: createdatRef.current.value,
               updatedat: updatedatRef.current.value,
          }
onsubmit(user);

clearForm();
     }
     function clearForm(){
          nameRef.current.value='';
          descriptionRef.current.value="";
          priceRef.current.value="";
          createdatRef.current.value="";
          updatedatRef.current.value="";
     }

     return(
          <div className="absolute w-1/4 z-10 mt-10 ml-[950px]">
               <form className="flex gap-1 flex-col items-center">
                    <input ref={nameRef}  className="py-1 px-2 outline-none" type="text" placeholder="Enter name ..." />
                    <input ref={descriptionRef} className="py-1 px-2 outline-none" type="text" placeholder="Enter Description ..." />
                    <input ref={priceRef} className="py-1 px-2 outline-none" type="text" placeholder="Enter Price ..." />
                    <input ref={createdatRef} className="py-1 px-2 outline-none" type="text" placeholder="Enter CreatedAt ..." />
                    <input ref={updatedatRef} className="py-1 px-2 outline-none" type="text" placeholder="Enter UpdatedAt ..." />
                    <button onClick={headleClick} className="py-1 w-2/3 bg-gray-700 border-none hover:bg-gray-400 text-black font-bold font-base ">Join</button>
               </form>
          </div>
     )
}

export default NewCard;