import { useEffect, useState } from "react";
import './App.css'

function App() {

const [product, setProduct] = useState({
  ingredients:[]
})

useEffect(() => {
  loadProduct()
}, [])

async function loadProduct(){
  let res = await fetch('http://localhost:2000/api/product')
  let resJson = await res.json()
  setProduct(resJson)
}

async function onChange(fieldName, value) {
  let newProduct = {...product}
  newProduct[fieldName] = value
  setProduct(newProduct)
}

  return (
    <div className="max-width-500px flex-direction-column">
    {/* HEADER */}
   <div>
    <input className="widht-100pct font-size-xx-large text-align-center"
    value={product.name}
    onChange={(e) => {
      let value = e.target.value
      onChange('name', value)   
    }}/>
    </div>

   {/* IMAGE */}
    <div className="flex-direction-column">
    <img className="widht-100pct" src={product.image}/>
    <input value={product.image}
    onChange={(e) => {
      let value = e.target.value
      onChange('image', value)   
    }}/>
    </div>

   {/* INGREDIENTS */}
   <div className="flex-direction-column">{
   product.ingredients.map((ingredient, index) => {
    return (
      <input value={ingredient}
        key={index}
      onChange={(e) => {
        let value = e.target.value 
        let newProduct = {... product}
        newProduct.ingredients[index] = value
        setProduct(newProduct)
      }} />)
   })
  }
   </div>

   {/* DESCRIPTION */}
    <textarea value={product.description} rows={4}
      onChange={(e) => {
      let value = e.target.value
      onChange('description', value)   
    }}
    >
    </textarea>

   </div>
  );
}

export default App;
