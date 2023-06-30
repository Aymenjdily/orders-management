import { LoginForm } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-row h-screen">
      <div className='flex-1 p-10 flex items-center justify-center'>
        <LoginForm />
      </div>
      <div className='flex-1 relative md:flex hidden'>
        <Image 
          fill
          src="/picture.jpg"
          alt='Main'
          className='object-cover'
        />
      </div>
    </main>
  )
}
