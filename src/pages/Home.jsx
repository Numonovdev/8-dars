import gifloading from '../loading/loading.gif'
import { useEffect, useState } from "react";
import Card from "../components/Card";
import NewCard from '../components/NewCard';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
    useEffect(() => {
    fetch("https://auth-rg69.onrender.com/api/products/all")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
           });
  }, []);

  return (
    <div className="flex flex-wrap gap-10 mx-auto max-w-6xl w-full mt-10 relative">{loading ? (<img className='w-1/5 mx-auto' src={gifloading} alt="Loading GIF" width="500" />) 
    :
     (data.length > 0 ? (data.map((value, index) => (<Card data={value} key={index} />))) : ( <p>No products available.</p>
     )
      )}
    </div>
  );
}

export default Home;
