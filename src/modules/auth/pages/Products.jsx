import React from 'react'
import Card from './Components/Card'

const Products = () => {
  return (
    <>
        <div className='flex flex-row flex-wrap bg-red-0 justify-around w-[100%] h-auto'>
            {
                [...new Array(30)].map((ele,index)=>{
                    return <Card/>
                })
            }
        </div>
    </>
  )
}

export default Products
