import React from 'react'
import Product from './Product'
import data from './data';

function Main({onAdd}) {
    const {products} = data;
    const microObjects =products.slice(0,3);
    const appleObjects =products.slice(3,7);


    return (
    <main>

    <h1>Products</h1>
    <h2>Microsoft devices</h2>
    <div className='products-display'>

    {microObjects.map((product)=>(
    <Product key={product.id} product={product} onAdd={onAdd}/>))}
    </div>

    <h2>Apple devices</h2> 
    <div className='products-display'>
    {appleObjects.map((product)=>(
    <Product key={product.id} product={product} onAdd={onAdd}/>))}
    </div>
    
    </main>
    )
}



export default Main;
