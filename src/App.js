import { useState } from "react";

function App() {

const [product, setProduct] = useState({})

  return (
    <>
   <h1>Less 19 Client (Front-end)</h1>
   <hr></hr>
   <button onClick={async ()=>{
      let res = await fetch('http://localhost:3000/api/product')
      let resJson = await res.json()
      console.log(resJson)
      setProduct(resJson)
   }}>Load</button>
   <h2>Блюдо: {product.name}</h2>
   <h3>{product.description}</h3>
   </>
  );
}

export default App;
