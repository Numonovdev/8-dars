function Card(props){
     const{name,description , price,createdAt ,updatedAt} = props.data;
     return(
          <div className="text-black font-sanstext-base font-semibold box-border p-5 flex flex-col w-1/4 border border-black rounded">
               <p className="flex justify-between">Name: <span>{name}</span> </p>
               <p className="flex justify-between">Description: <span>{description}</span> </p>
               <p className="flex justify-between">Price: <span>{price}</span> </p>
               <p className="flex flex-wrap">CreatedAt: <span>{createdAt}</span> </p>
               <p className="flex flex-wrap">UpdatedAt: <span>{updatedAt}</span></p>
          </div>
     )
}

export default Card;