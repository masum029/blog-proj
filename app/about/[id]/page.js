import React from 'react'
import getBlogPost from '@/app/lib/getBlogPost';
import getPostComments from '@/app/lib/getPostComments';
// import { Suspense } from "react";
// import Comments from "@/app/components/Comments";

export default async function SingleBlog({params}) {
    const id=params.id;

    const postPromise = getBlogPost(id);
    const commentsPromise = getPostComments(id);

    const post = await postPromise;
  return (
    <div>
    <section>
        <h1 className="font-bold text-lg">{post.title}</h1>

        <div className="mt-5">{post.body}</div>

        {/* <div className="mt-6">
            <Suspense fallback={<h3>Loading comments...</h3>}>
                <Comments commentsPromise={commentsPromise} />
            </Suspense>
        </div> */}
    </section>
</div>
  )
}
