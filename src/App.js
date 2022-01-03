
import React, {useState}from 'react'
import Header from './Header';
import Main from './Main';
import Basket from './Basket';
import data from './data';
import  "./index.css";

function App() {
const {products} = data;
const [cardItems, setCardItems]= useState([]);

const onAdd =(product)=>{
  const exist =cardItems.find((x)=> x.id ===product.id);
  if(exist){
    setCardItems(cardItems.map((x)=>x.id===product.id ? {...exist, qty: exist.qty + 1}:x))
  }else{

    setCardItems([...cardItems,{...product,qty:1}])
  }
}

const onRemove =(product)=>{
  const exist=cardItems.find((x)=> x.id ===product.id);
  if(exist.qty===1){
    setCardItems(cardItems.filter((x)=>x.id !== product.id))
  }else{
  
    setCardItems(cardItems.map((x)=>x.id===product.id ? {...exist, qty: exist.qty - 1}:x))

  }
}

  const clearBasket = ()=>{setCardItems ([])}

return (

<div>
<Header
countCardItems={cardItems.length}
/>

<div>

<Main 
onAdd={onAdd} 
products={products}
/>

<Basket  
clearBasket= {clearBasket} 
onRemove={onRemove}
onAdd={onAdd} 
cardItems={cardItems}
/>


</div>
</div>
  )
}

export default App;
