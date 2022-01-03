
import React from 'react'
import { GoSearch } from 'react-icons/go';


function Product({product,onAdd}) {
    

    
    return (
        <div className='product-container'>

        <a href={product.link} target="_blank" rel="noopener noreferrer"><img src={product.image} alt ={product.name}/></a>
        <h3>{product.name}</h3>
        
        <div><strong> £ {product.price}</strong></div>

        <div>
            <button onClick={()=>onAdd(product)}>Add To Cart</button>
        </div>

        <div className='explore-more'>
        <a href={product.link} target="_blank" rel="noopener noreferrer">Explore more...<GoSearch/></a>
        </div>

        </div>
        
    )
}

export default Product;
