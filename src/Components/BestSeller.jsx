import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import './styles.css';
import Tittle from './Tittle';
import ProductItem from './ProductItem';
const BestSeller = () => {
    const {products} =useContext(ShopContext);
    const [bestSeller,setBestSeller]=useState([]);
    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0, 5))
    }, []);
  return (
        <div className='mt-10'>
            <div className='text-center py-8 text-3xl'>
                <Tittle text1={'BEST'} text2={'SELLER'}/>
                <p className='w-3/4 m-auto text-xs  sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui similique architecto, et dolorum temporibus eaque nemo iure consequuntur, sequi voluptates quas ipsum quia earum hic</p>
            </div>
            <div  className='grid  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item,index)=>(
                        <ProductItem key={index} id={item._id} name={item.name} image={item.image}  price={item.price} />

                    ))
                }
            </div>
        </div>
  )
}

export default BestSeller