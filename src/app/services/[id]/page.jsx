import dbConnect, { collectionNamesObj } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'

export default async function ServiceDetailsPage({ params }) {

    const p = await params
    const servicesCollection = dbConnect(collectionNamesObj.servicesCollection);
    const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });
    return (
        <div>
            <section>
                <div className="flex justify-center w-full my-12">
                    <div className="relative w-[1200px] h-[300px] overflow-hidden rounded-3xl">
                        <Image
                            src="/assets/images/checkout/checkout.png"
                            alt="banner"
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/10 to-transparent"></div>
                    </div>
                </div>
            </section>

            <p>{JSON.stringify(data)}</p>
        </div>
    )
}
