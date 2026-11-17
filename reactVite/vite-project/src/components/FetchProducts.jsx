import { useEffect, useState } from "react";

function FetchProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const jsonData = await res.json();
        console.log(jsonData);
        setData(jsonData.products);
      } catch (e) {
        console.log("Error is:", e);
      } finally {
        console.log("Fetching data completed.");
      }
    }

    fetchData();
  }, []);
  
  return (
    <div>
      <h2>FetchProducts</h2>
      {data.map((ele) => (
        <div key={ele.id}>
            <h3>{ele.id}</h3>
            <h2>{ele.title}</h2>
            <img src={ele.thumbnail} width="100" height="100" ></img>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default FetchProducts;
