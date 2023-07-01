"use client"

import { Cards, Navbar, UserList } from '@/components'

import React from 'react'

import { useSession } from 'next-auth/react'

const Dashboard = () => {
    const {data:session} = useSession()

    const CardsOptions = [
        {
            id: "orders",
            title: "orders",
            image: "/box.svg",
            number: 52
        },
        {
            id: "products",
            title: "products",
            image: "/product.svg",
            number: 10
        },
        {
            id: "delivers",
            title: "delivers",
            image: "/deliver.svg",
            number: 3
        },
    ]

  return (
    <div className='container mx-auto'>
        <Navbar />
        <div className='flex py-12 lg:flex-row flex-col gap-10'>
            <div className='flex-1'>
                <div className='px-4  text-gray-900'>
                    <h2 className='text-xl font-semibold text-gray-700 mb-3'>
                        Hi <span className='capitalize'>{session?.user.name}</span>.
                    </h2>
                    <h1 className='text-3xl font-bold'>
                        Welcome back 👋
                    </h1>
                </div>
                <div className='px-4 grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10'>
                    {
                        CardsOptions && CardsOptions.map((item) => (
                            <Cards 
                                key={item.id}
                                data={item}
                            />
                        ))
                    }
                    <div className='bg-gray-200 flex justify-between items-center p-5 lg:col-span-3 md:col-span-2 rounded-lg'>
                        <p className='font-semibold text-gray-600'>
                            Income
                        </p>
                        <h1 className='text-3xl mt-2 font-bold'>
                            1000 MAD
                        </h1>
                    </div>
                </div>
            </div>
            <div className=' px-4'>
                <UserList />
            </div>
        </div>
    </div>
  )
}

export default Dashboard