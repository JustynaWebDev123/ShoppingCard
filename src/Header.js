import React from 'react'
import { BsCart4 } from "react-icons/bs";


function Header({countCardItems}) {

return (
<header>
<div>
<h1>Shopping Card </h1>
</div>
    
<div className='loggin-corner'>
<a href="#card"> Cart Items</a>
<BsCart4/> {''}

{countCardItems? (<button className='count-btn'>{countCardItems}</button>):('')}
<a href="#signin"> SignIn </a>
</div>  

</header>
    )
  
}


export default Header;
