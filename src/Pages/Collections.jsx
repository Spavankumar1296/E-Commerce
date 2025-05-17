import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Tittle from '../Components/Tittle'
import ProductItem from '../Components/ProductItem'

const Collections = () => {

  const {products}=useContext(ShopContext);
  const [showFilter,setshowFilter]=useState(false);
  const [filterProduct,setFilterProduct] =useState([]);
  const [category,setCategory]=useState([]);
  const [subCategory,setSubCategory]=useState([]);
  const [sortType,setSortType]=useState('relavent');

  const toogleCategory=(e)=>{
      if(category.includes(e.target.value)){
        setCategory(prev=>prev.filter(item=>item!==e.target.value));
      }
      else{
        setCategory(prev=>[...prev,e.target.value]);
      }
  }
  const toogleSubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=>item!==e.target.value));
    }
    else{
      setSubCategory(prev=>[...prev,e.target.value]);
    }
  }
  const applyFilter=()=>{
    let productsCopy=products.slice();
    if(category.length > 0){
        productsCopy=productsCopy.filter(item=>category.includes(item.category));
    }
    if(subCategory.length > 0){
        productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory));
    }
    setFilterProduct(productsCopy);
  }
  useEffect(()=>{
      applyFilter();
  },[category,subCategory])
  useEffect(()=>{
    sortProduct();
  },[sortType])
  const sortProduct=()=>{
    let fpCopy= filterProduct.slice();
    switch(sortType){
      case 'low-high':
        setFilterProduct(fpCopy.sort((a,b)=>(a.price-b.price)));
        break;
      case 'high-low':
        setFilterProduct(fpCopy.sort((a,b)=>(b.price-a.price)));
        break;
        default:
          applyFilter();
          break;
    }
  }
  return (
    <div className='flex  sm:flex-col md:flex-row gap-1 sm:gap-10  pt-10 border-t'>
        {/* Filter options */}
        <div className='min-w-60'>
          <p className='my-2 text-xl flex items-center cursor pointer gap-2' 
           onClick={() => setshowFilter(!showFilter)}>FILTERS
            <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
           </p>
          {/* Categorical filter  */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? 'block':'hidden' } lg:block`}>
              <p className='mb-3 text-sm font-medium'>CATEGORICAL</p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2' >
                  <input className='w-3' type="checkbox" value={'Men'}  onChange={toogleCategory}  /> Men
                </p>
                <p className='flex gap-2' >
                  <input className='w-3' type="checkbox" value={'Women'}  onChange={toogleCategory} /> Women
                </p>
                <p  className='flex gap-2' >
                  <input className='w-3' type="checkbox" value={'Kids'}  onChange={toogleCategory} /> Kids
                </p>
              </div>
          </div>
          {/* SubCategory */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 my-5 ${showFilter ? 'block':'hidden' } lg:block`}>
              <p className='mb-3 text-sm font-medium'>TYPE</p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2' >
                  <input className='w-3' type="checkbox" value={'Topwear'} onChange={toogleSubCategory} /> Topwear
                </p>
                <p className='flex gap-2' >
                  <input className='w-3' type="checkbox" value={'Bottomwear'}  onChange={toogleSubCategory} /> Bottomwear
                </p>
                <p  className='flex gap-2' >
                  <input className='w-3' type="checkbox" value={'Winterwear'}  onChange={toogleSubCategory} /> Winterwear
                </p>
              </div>
          </div>
        </div>
        {/* Right sidebar */}
        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Tittle text1={'ALL'} text2={'COLLECTIONS'} />
            {/* product sort */}
            <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
              <option value="relavent">Sort by: Relavent</option>
              <option value="high-low">Sort by: High to Low</option>
              <option value="low-high">Sort by Low to High</option>
            </select>
          </div>
          {/* map products */}
        <div className='grid  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            filterProduct.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
          }
        </div>
        </div>
    </div>
  )
}

export default Collections