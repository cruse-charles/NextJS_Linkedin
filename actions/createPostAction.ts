'use server'

import { currentUser } from "@clerk/nextjs/server";

export default async function createPostAction(formData: FormData) {
    const user = await currentUser();
    // we could also try a auth.protect() here, imported from clerk which seemingly does the same thing

    if (!user) {
        throw new Error("User not authenticated");
    }

    const postInput = formData.get('postInput') as string;
    const image = formData.get("image") as File;
    let imageUrl: string | undefined;

    if (!postInput.trim()) {
        throw new Error("Post Input is required");
    }

    // define user

    // upload image if it exists

    // create post in database

    // revalidate path '/' - home page
}