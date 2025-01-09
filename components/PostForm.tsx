'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useUser } from '@clerk/nextjs';

const PostForm = () => {
    const {user} = useUser();

  return (
    <div>
        <form action=''>
            <div>
            <Avatar>
            {user?.id ? (
                <AvatarImage src={user?.imageUrl} />
            ) : (
                <AvatarImage src="https://github.com/shadcn.png" />
            )}
            <AvatarFallback>{user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}</AvatarFallback>
        </Avatar>
            </div>
        </form>
    </div>
  )
}

export default PostForm