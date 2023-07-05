"use client"

import Image from 'next/image'

import Link from 'next/link'

import { useState } from 'react'

import { useSession, signOut } from 'next-auth/react'

import { useRouter } from 'next/navigation'

const Navbar = () => {
    const {data:session} = useSession()

    const router = useRouter()

    const [toggle, setToggle] = useState(false)

    const goToLoginPage = () => {
        router.push('/')

        setTimeout(() => {
            signOut()
        }, 500);
    }

  return (
    <header className='py-6 px-4'>
        <nav className='flex justify-between'>
            <Link href='/dashboard'>
                <Image 
                    src="/Logo-black.png"
                    alt="Logo"
                    className='object-contain'
                    width={100}
                    height={100}
                />
            </Link>
            {/* Desktop Nav */}
            <div className="sm:flex hidden">
                {
                    session?.user && (
                        <div className="flex gap-3 md:gap-5 items-center">
                            <Link href="/orders" className="text-gray-500 hover:text-black duration-300">
                                Orders
                            </Link>
                            <Link href="/products" className="text-gray-500 hover:text-black duration-300">
                                Products
                            </Link>
                            <Link href="" className="text-gray-500 hover:text-black duration-300">
                                Delivers
                            </Link>
                            <button className="bg-black px-8 py-2 rounded-md font-semibold border-2 border-black text-white" type="button" onClick={goToLoginPage}>
                                Sign Out
                            </button>
                            <Link href="/profile">
                                <Image
                                    src={session?.user.image}
                                    width={37}
                                    height={37}
                                    className="rounded-full"
                                    alt="profile"
                                />
                            </Link>
                        </div>
                    ) 
                }
            </div>
            {/* Mobile Nav */}
            <div className="sm:hidden flex relative z-[5]">
                {
                    session?.user && (
                        <div className="flex">
                            <Image
                                src={session?.user.image}
                                width={37}
                                height={37}
                                className="rounded-full"
                                alt="profile"
                                onClick={() => setToggle((prev) => !prev)}
                            />
                            {
                                toggle && (
                                    <div className="dropdown">
                                        <Link 
                                            className="dropdown_link"
                                            href="/orders"
                                            onClick={() => setToggle(false)}
                                        >
                                            Orders
                                        </Link>
                                        <Link 
                                            className="dropdown_link"
                                            href="/products"
                                            onClick={() => setToggle(false)}
                                        >
                                            Products
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setToggle(false)
                                                goToLoginPage()
                                            }}
                                            className="mt-5 w-full bg-black px-8 py-2 rounded-md font-semibold hover:bg-white border-2 border-black hover:text-black duration-300 text-white"
                                        >
                                                Sign Out
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar