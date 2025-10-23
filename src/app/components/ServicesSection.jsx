import Image from 'next/image'
import React from 'react'
import { GrFormNextLink } from "react-icons/gr";

export default async function ServicesSection() {

    // const res = await fetch("/services.json")
    const data = [
        {
            "_id": "635a0c0b64a6d231228942ae",
            "service_id": "04",
            "title": "Engine Oil Change",
            "img": "https://i.ibb.co/T2cpBd5/888.jpg",
            "price": "20.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            "_id": "635a0c0b64a6d231228942af",
            "service_id": "05",
            "title": "Battery Charge",
            "img": "https://i.ibb.co/ydCbDN3/5555.jpg",
            "price": "20.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            "_id": "635b591a1dafe382a9da8c96",
            "service_id": "01",
            "title": "Full car Repair",
            "img": "https://i.ibb.co/R6Z2nFM/55.jpg",
            "price": "200.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            "_id": "635b5afc1dafe382a9da8c98",
            "service_id": "02",
            "title": "Engine Repair",
            "img": "https://i.ibb.co/5MvmD2g/88.jpg",
            "price": "150.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            "_id": "635b5b691dafe382a9da8c99",
            "service_id": "03",
            "title": "Automatic Services",
            "img": "https://i.ibb.co/wh7t3N3/555.jpg",
            "price": "30.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            "_id": "635b5ba51dafe382a9da8c9a",
            "service_id": "06",
            "title": "Electrical System",
            "img": "https://i.ibb.co/KzCG8qr/8888.jpg",
            "price": "20.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        }
    ]

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
