import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import './styles.css';
import Tittle from './Tittle';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const {products} = useContext(ShopContext);
  const [latestCollection,setLatestProducts]=useState([]);
  useEffect(()=>{
    setLatestProducts(products.slice(0,10));
  },[])
  return (
    <div className="mb-10">
      <div className='text-center py-8 text-3xl'>
        <Tittle text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs  sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui similique architecto, et dolorum temporibus eaque nemo iure consequuntur, sequi voluptates quas ipsum quia earum hic</p>
      </div>
      {/* Rendering Products */}
      <div className='grid  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'> 
        {
          latestCollection.map((item,index)=>(
            <ProductItem key={index} id={item._id } image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>

      
    </div>
  );
};

export default LatestCollection;
