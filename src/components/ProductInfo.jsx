import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai';
import {TbScale} from 'react-icons/tb';
import {GoPrimitiveDot} from 'react-icons/go'
const ProductInfo = () => {
  return (
    <main className='bg-[#fff] w-[650px] flex rounded-lg shadow-lg'>
        <section className='p-10'>
            <img src="https://pngimg.com/uploads/headphones/small/headphones_PNG7631.png" alt="" />
        </section>
        <section className='pt-10'>
            <div className='w-[300px]'>
                <button className='bg-[#3B66B8] text-white px-5 py-[.3rem] rounded-full'>free shiping</button>
                <h3 className='text-xl font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing.</h3>
                <p className='mt-5 line-through'>1599</p>
                <h3 className='text-2xl font-bold'>799</h3>
                <p className='text-[#90919B] text-[11px]'>The offer is valid until April 3 or as long as stack loss!</p>
            </div>
            <div>
                <button className='px-28 py-2 text-white bg-[#4787E9] rounded-md mt-4 border border-b-[#3B66B8] border-b-4'>Add to cart</button>
                <p className='text-[12px] mt-4 flex items-center'><GoPrimitiveDot className='text-[green] text-[11px]' /> 50+ pcs in stock</p>
                <div className='flex justify-between pb-10 pt-5'>
                    <button className='border border-[#90919B] px-3 py-2 rounded-lg flex items-center'><TbScale className='mr-2' /> Add to cart</button>
                    <button className='border border-[#90919B] px-3 py-2 rounded-lg flex items-center'><AiOutlineHeart className='mr-2' /> Add to wishList</button>
                </div>
            </div>
        </section>
    </main>
  )
}

export default ProductInfo