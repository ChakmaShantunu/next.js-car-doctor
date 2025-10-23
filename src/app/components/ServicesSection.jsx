import dbConnect from '@/lib/dbConnect';
import Image from 'next/image'
import React from 'react'
import { GrFormNextLink } from "react-icons/gr";

export default async function ServicesSection() {

    // const res = await fetch("/services.json")
    const serviceCollection = dbConnect("test_services");
    const data = await serviceCollection.find({}).toArray();
    

    return (
        <div>
            <div className='text-center space-y-5 my-6'>
                <h1 className='text-5xl font-bold'>Our Service Area</h1>
                <p className='text-gray-400'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-12 gap-4 mx-auto'>
                {
                    data.map((item, _id) => {
                        return (
                            <div key={item._id} className='col-span-12 md:col-span-6 lg:col-span-4 border-gray-200 p-4 border-2 rounded-xl w-[364px] h-[348px]'>
                                <div className='flex justify-center items-center'>
                                    <div className=''>
                                        <Image src={item.img} alt={item.title} width={314} height={208} className='rounded-xl'></Image>
                                        <h2 className='text-2xl font-bold my-5'>{item.title}</h2>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-xl font-bold text-red-600'>Price: ${item.price}</p>
                                            <GrFormNextLink size={30} className='text-red-600' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        </div>
    )
}
