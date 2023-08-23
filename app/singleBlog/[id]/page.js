import React from 'react'
import getBlogPost from '@/app/lib/getBlogPost';
// import { Suspense } from "react";
// import Comments from "@/app/components/Comments";

//export default async function SingleBlog({params}) {
  export default async function page({params}) {  
const id=params.id;

    const postPromise = getBlogPost(id);
 

    const post = await postPromise;
  return (
    <div>
    <section>
        <h1 className="font-bold text-lg">{post.title}</h1>

        <div className="mt-5">{post.body}</div>
    </section>
</div>
  )
}
