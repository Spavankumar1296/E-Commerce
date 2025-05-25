import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/Shopcontext'
import Tittle from '../Tittle';
import ProductItem from '../ProductItem';

const ReleatedProducts = ({category,subCategory}) => {
    const {products}=useContext(ShopContext);
    const [releated,setReleated]=useState([]);
    useEffect(()=>{
        if(products.length>0){
            let productsCopy=products.slice('');
            productsCopy=productsCopy.filter((item)=>category===item.category);
            productsCopy=productsCopy.filter((item)=>subCategory===item.subCategory);
            setReleated(productsCopy.slice(0, 5));
        }
    },[products]);
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Tittle text1={'RELEATED'} text2={"PRODUCT"} />
        </div>
         <div className='grid  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
            releated.map((item,index)=>(
               <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))}
        </div>

    </div>
  )
}

export default ReleatedProducts