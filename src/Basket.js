import React from 'react'
import { BsCart4 } from "react-icons/bs";

function Basket({cardItems,onAdd,onRemove,clearBasket}) {

    const itemsPrice=cardItems.reduce((a,c)=> a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice=itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;


     return (
        <aside>
            
<h1>Card Items</h1> 
<div >
    <div className='card-items-top'>
    {cardItems.length ===0 && <div> Your basket is empty <BsCart4/></div>} 
    </div>
    
{cardItems.map((item)=>(
    <div key={item.id}>
    <div>{item.name}</div>

    <div className='card-item-btn-container'>
    <button className='card-item-btn' onClick={()=>onAdd(item)}>+</button>
    <button className='card-item-btn' onClick={()=>onRemove(item)}>-</button>
    </div>
                     
    <div>
    {item.qty}x £{item.price.toFixed(2)}
    </div>
    
    </div>
    ))}

{cardItems.length !==0 &&(
<>
<hr></hr>
<div className='card-result'>
<div className='card-item'>Item Price</div>
<div> £{itemsPrice.toFixed(2)}</div>  
<div className='card-item'>Tax Price</div>
<div> £{taxPrice.toFixed(2)}</div> 
<div className='card-item'>Shipping Cost</div>
<div> £{shippingPrice.toFixed(2)}</div> 
<div className='card-item'>Total Price</div>
<div> £{totalPrice.toFixed(2)}</div> 
</div> 

<div className='card-item-btn-container-bottom'>
<button className='clear-btn' onClick={clearBasket}> Clear basket</button>
<button className='checkout-btn' onClick={()=>alert("Thank you for shopping with us!")}>Checkout</button>
</div>
                    
</>
)}

</div> 
</aside>

    )
}

export default Basket;
