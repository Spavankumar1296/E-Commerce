import React from 'react'

const NewsLetterBox = () => {
  const onSubmitHandler=(event)=>{
    event.preventDefault();
  }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Shop Now and Get More Discounts</p>
        <p className='text-gray-400 mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa sit animi ess.</p>
        <form onSubmit={onSubmitHandler} className=' sm:w-1/2 flex items-center gap-3  mx-auto my-6 border pl-3' action="">
            <input className=' sm:flex-1  outline-none' type="email" name="email" id="email" placeholder='Enter Your email' required/>
            <button type="submit" className='bg-black text-white text-xs px-10 py-4' >SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox