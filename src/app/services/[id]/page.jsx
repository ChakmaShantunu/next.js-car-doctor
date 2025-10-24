import dbConnect, { collectionNamesObj } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'
import { GrFormNextLink } from "react-icons/gr";

export default async function ServiceDetailsPage({ params }) {

    const p = await params
    const servicesCollection = dbConnect(collectionNamesObj.servicesCollection);
    const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });
    return (
        <div className='max-w-7xl mx-auto'>
            <section>
                <div className="flex justify-center w-full my-12">
                    <div className="relative w-[1200px] h-[300px] overflow-hidden rounded-3xl">
                        <Image
                            src="/assets/images/checkout/checkout.png"
                            alt="banner"
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'center' }}

                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/10 to-transparent z-0"></div>
                        <div className='absolute top-32 left-32 z-10'>
                            <h1 className='text-5xl font-bold text-white'>Service Details</h1>
                        </div>
                        <div className='absolute bottom-0 left-3/6 z-10'>
                            <button className='btn btn-primary'>Home/Service Details</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='grid grid-cols-12'>
                <div className='col-span-8'>
                    <Image src={data.img} alt={data.title} width={752} height={400} className='rounded-4xl'></Image>
                </div>
                <div className='col-span-4 bg-[#F3F3F3] rounded-2xl w-[364px] h-[490px] p-12 space-y-4'>
                    <h3 className='text-xl font-bold'>Services</h3>
                    <div className='space-y-6'>
                        <div>
                            <button className='btn btn-outline p-6 w-full flex justify-between'>Full Car Repair <GrFormNextLink size={22} /></button>
                        </div>
                        <div>
                            <button className='btn btn-outline p-6 w-full flex justify-between'>Engine Repair <GrFormNextLink size={22} /></button>
                        </div>
                        <div>
                            <button className='btn btn-outline p-6 w-full flex justify-between'>Automatic Services <GrFormNextLink size={22} /></button>
                        </div>
                        <div>
                            <button className='btn btn-outline p-6 w-full flex justify-between'>Engine Oil Change <GrFormNextLink size={22} /></button>
                        </div>
                        <div>
                            <button className='btn btn-outline p-6 w-full flex justify-between'>Battery Charge <GrFormNextLink size={22} /></button>
                        </div>
                    </div>

                </div>
            </section>

            <p>{JSON.stringify(data)}</p>
        </div>
    )
}
