import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const UserInformation = async () => {
    const user = await currentUser()

  return (
    <Avatar>
        <AvatarImage src={user?.imageUrl || "https://github.com/shadcn.png"} />
        <AvatarFallback>{user?.firstName?.charAt(0)} {user?.lastName?.charAt(0)}</AvatarFallback>
    </Avatar>

  )
}

export default UserInformation