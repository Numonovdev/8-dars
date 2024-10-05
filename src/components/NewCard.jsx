function NewCard(){
     return(
          <div >
               <form>
                    <input type="text" placeholder="Enter name ..." />
                    <input type="text" placeholder="Enter Description ..." />
                    <input type="text" placeholder="Enter Price ..." />
                    <input type="text" placeholder="Enter CreatedAt ..." />
                    <input type="text" placeholder="Enter UpdatedAt ..." />
                    <button className="py-1 w-2/3 bg-gray-700 border-none hover:bg-gray-400 text-black font-bold font-base ">Join</button>
               </form>
          </div>
     )
}

export default NewCard;