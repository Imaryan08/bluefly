
import React from 'react'

const Singleprod = (props) => {

    const {product,onAdd} = props



  return (
    <div className="product">
        <img src={product.img} alt={product.prod}/>
           <div className="proddesc">
           <span>{product.prod}</span>             
           <h4>{product.price}</h4>   
           </div>     
           <span>{product.disp}</span> 
           <div>
               <button  onClick={()=> onAdd(product)}>Add To Cart</button>
           </div>

    </div>
  )
}

export default Singleprod