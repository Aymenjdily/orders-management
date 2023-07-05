import { LoginForm } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-row h-screen">
      <div className='flex-1 px-10 flex-col items-center relative md:flex hidden justify-center bg-[#030303]'>
        <Image
          src="/Logo-white.png"
          width={100}
          height={100}
          alt="logo"
          className='object-contain self-start'
        />
        <div className='w-full h-80 relative my-12'>
          <Image 
            fill
            src="/loginPicture.jpg"
            alt='Main'
            className='object-cover rounded-xl'
          />
        </div>
        <h1 className='text-white self-start font-bold text-3xl'>
          Manage Your Bussiness With Orent
        </h1>
        <p className='text-sm text-gray-400 mt-5'>
          Orent is a powerful and intuitive system designed to streamline your order management processes and boost efficiency. Whether you're a small business or a large enterprise, Orent simplifies the entire order lifecycle, from creation to fulfillment, helping you stay organized and focused on what matters most – your customers.
        </p>
      </div>
      <div className='flex-1 p-10 flex items-center justify-center'>
        <LoginForm />
      </div>
    </main>
  )
}
