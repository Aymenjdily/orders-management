"use client"

import Image from "next/image"

import { useRouter } from "next/navigation"

import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

import { useState, useEffect } from "react"

const LoginForm = () => {
    const router = useRouter()

    const {data:session} = useSession()

    const [providers, setProviders] = useState(null)

    const GotoHome = () => {
        if(session?.user){
            router.push('/dashboard')
        }
    }

    useEffect(() => {
        const Providers = async () => {
            const res = await getProviders()
            setProviders(res);
        }

        Providers()
    }, [])

  return (
    <div className='flex flex-col'>
        <div className='my-10 flex flex-col gap-5'>
            <h1 className='font-bold text-3xl'>
              Welcome to Orent!
            </h1>
            <p className='text-gray-500 max-w-lg'>
                You are one step away from getting the early access to Orent your orders Management.
            </p>
        </div>
        <div>
            {
                session?.user ? (
                    <div className="flex flow-row gap-5 items-center">
                        <Image 
                            src={session?.user.image}
                            alt={session?.user.username}
                            height={50}
                            width={50}
                            className="object-contain rounded-full"
                        />
                        <span onClick={GotoHome} className="underline cursor-pointer">
                            Go to Dashboard
                        </span>
                    </div>
                ) : (
                    <> 
                        {
                            providers && Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={() => {
                                        signIn(provider.id)
                                    }}
                                    className="flex gap-5 items-center px-10 rounded-md shadow-sm border border-black py-3 font-semibold"
                                >
                                    <Image 
                                        width={20}
                                        height={20}
                                        alt={provider.name}
                                        src="/google-icon.svg"
                                    />
                                    Continue with Google
                                </button>
                            ))
                        }
                    </>
                )
            }
        </div>

        <div className="absolute bottom-20">
            <p className="text-gray-500 text-sm mb-1">
                By signing up you agree to our
            </p>
            <div className="flex items-center gap-2 text-sm">
                <span className="underline cursor-pointer">
                    Terms of Service
                </span>
                &
                <span className="underline cursor-pointer">
                    Privacy Policy
                </span>
            </div>
        </div>
    </div>
  )
}

export default LoginForm