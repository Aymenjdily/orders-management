"use client"

import {useState, useEffect} from 'react'

import Image from 'next/image'

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
          const res = await fetch('/api/users')
          const data = await res.json()
    
          setUsers(data)
        }
    
        fetchUsers()
    }, [])

  return (
    <>
        <h1 className='font-bold text-xl mb-5'>
            All Users
        </h1>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                    <tr>
                        <th class="px-6 py-3">
                            General Informations
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Position
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((user) => (
                            <tr key={user._id} class="bg-black border-b">
                                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <Image
                                        src={user.image}
                                        width={50}
                                        height={50}
                                        alt={user.username}
                                        className='rounded-full object-contain'
                                    />
                                    <div class="pl-3">
                                        <div class="text-base font-semibold capitalize">
                                            {user.username}
                                        </div>
                                        <div class="font-normal text-gray-300">
                                            {user.email}
                                        </div>
                                    </div>  
                                </th>
                                <td class="px-6 py-4 text-white">
                                    No position
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </>

  )
}

export default UserList