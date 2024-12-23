import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { Button } from './ui/button'


const UserInformation = async () => {
    const user = await currentUser()
    
    const firstName = user?.firstName
    const lastName = user?.lastName
    const imageUrl = user?.imageUrl

  return (
    <div className='flex flex-col justify-center items-center bg-white mr-6 rounded-lg border py-4'>
        <Avatar>
            {user?.id ? (
                <AvatarImage src={imageUrl} />
            ) : (
                <AvatarImage src="https://github.com/shadcn.png" />
            )}
            <AvatarFallback>{firstName?.charAt(0)}{lastName?.charAt(0)}</AvatarFallback>
        </Avatar>

        <SignedIn>
            <div className='text-center'>
                <p className='font-semibold'>{firstName} {lastName}</p>
                <p className='text-xs'>@{firstName} {lastName} - {user?.id?.slice(-4)}</p>
            </div>
        </SignedIn>

        <SignedOut>
            <div className='text-center space-y-2'>
                <p className='font-semibold'>You are not signed in.</p>
                <Button asChild className='bg-[#0B63C4] text-white'>
                    <SignInButton>Sign in</SignInButton>
                </Button>
            </div>
        </SignedOut>
        
        <hr className='w-full border-gray-200 my-5'></hr>
    </div>

  )
}

export default UserInformation