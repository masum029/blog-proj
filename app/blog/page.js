import React from 'react'
import styles from '../page.module.css'

import getAllPosts from '../lib/getAllPosts';

export default async function page() {

  const posts=await getAllPosts();

  console.log(posts);
  
  return (
    <main className={styles.main}>
  
  <div> About page</div>
        <div>
          {posts.map((post)=>{
            return(
              <p key={post.id}>
              {post.id} - {post.title}
           </p>
            )
           
          })}
        </div>

  </main>
  )
}
