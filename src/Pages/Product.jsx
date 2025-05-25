import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import ReleatedProducts from '../Components/Navbar/ReleatedProducts';

const Product = () => {
  const {productId}=useParams();
  const {products,currency } = useContext(ShopContext);
  const [productData,setproductData]=useState(false);
  const [image,setImage]=useState('');
  const [size,setSize]=useState('')
  const fetchProductData=async ()=>{
    products.map((item)=>{
      if(item._id===productId){
        setproductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }
  useEffect(()=>{
    fetchProductData();
  },[productId,products])
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product Data */}
      <div className='flex  flex-row gap-12 '>
          {/* product image */}
          <div className='flex flex-row gap-8'>
            <div className='flex sm:flex-row md:flex-col md:overflow-x-auto  sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%]'>
              {
                productData.image.map((item,index)=>(
                  <img onClick={()=>setImage(item)} src={item} key={index} className='  sm:mb-3 flex-shrink-0 cursor-pointer h-auto' alt="" />
                ))
              }
              
            </div>
            <div className='w-[75%]'>
              <img className='w-full h-auto' src={image} alt="" />    
            </div>
            
          </div>
           {/* Product Info */}
           <div className='flex-1'>
                <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                <div className='flex items-center  gap-1 mt-2'>
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                </div>
                <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                <div className='flex flex-col gap-4 my-8'>
                  <p>Select Size</p>
                  <div className='flex gap-2'>
                      {productData.sizes.map((item,index)=>(
                        <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size? 'border-orange-500':''}`} key={index}>{item}</button>
                      ))}
                  </div>
                </div>
                <button className='bg-black text-white px-8 py-3  text-sm active:bg-gray-700'>ADD TO CART</button>
                <hr className='mt-8 sm:w-4/5'/>
                <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                      <p>100% Original Product.  </p>
                      <p>Cash on delivery is available on this product. </p>
                      <p>Easy return and exchange policy within 7 days.</p>
                </div>
           </div>
      </div>
          {/* Description and Review Section */}
          <div className='mt-20'>
              <div className='flex'>
                    <b className='border px-5 py-3 text-sm'>Description</b>
                    <p className='border px-5 py-3 text-sm'>Review (122)</p>
              </div>
              <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                <p>E-commerce website is an online platform that facilitates the buying and selling of the products</p>
                <p>This is the e-commer</p>
              </div>
          </div>
          {/* Display releated Product */}
          <ReleatedProducts/>
    </div>
  ) : <div className='opacity-0 '></div>
}

export default Product