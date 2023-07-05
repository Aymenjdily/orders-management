import { Navbar } from '@/components'

import Link from 'next/link'

import React from 'react'

const Orders = () => {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <div className='py-12 px-4'>
        <div className='flex gap-8 md:flex-row flex-col justify-between items-center'>
          <h1 className='font-bold text-3xl'>Orders</h1>
          <div className='flex items-center gap-8'>
            <Link href="/addClient" className='bg-black px-5 py-2 text-white rounded-md'>
              Add Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders