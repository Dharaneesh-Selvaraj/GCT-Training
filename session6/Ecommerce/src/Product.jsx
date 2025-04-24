import React from 'react'
import AddToCartBtm from './AddToCartBtm'

export default function Product() {
    const products = [
        {
            id:1,
            brand:"samsung",
            model:"s24 ultra",
            price:100000,
            image:"https://th.bing.com/th/id/OIP.i3dZPTG8ooYywpOJCSzE3gHaHZ?rs=1&pid=ImgDetMain",
            descreption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ut!"
        },
        {
            id:2,
            brand:"Apple",
            model:"iphone 16",
            price:60000,
            image:"https://th.bing.com/th/id/OIP.K--7GuaoEhLA_TNdO_s22AHaEK?rs=1&pid=ImgDetMain",
            descreption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ut!"
        },
        {
            id:3,
            brand:"Google",
            model:"Pixel",
            price:80000,
            image:"https://th.bing.com/th/id/OIP.wgIGOMDJvt0pyOTZ1VEM5wHaEK?rs=1&pid=ImgDetMain",
            descreption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ut!"
        },
    ]
  return (
    <div className='flex justify-around'>
        {products.map((pro)=>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                <img
                    src={pro.image}
                    alt="Shoes" />
                </figure>
                <div className="card-body bg-green-600">
                <h2 className="card-title">{pro.brand}</h2>
                <p>{pro.descreption}</p>
                <div className="card-actions justify-end">
                    <AddToCartBtm />
                </div>
                </div>
          </div>  
        )}
    </div>
  )
}
