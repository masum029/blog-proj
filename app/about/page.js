import styles from '../page.module.css'
import getAllPosts from '../lib/getAllPosts'
import Link from 'next/link';




export default async function page() {
  const posts= await getAllPosts();
  
  console.log(posts);
  return (
    <main className={styles.main}>   
        <div> Blog List with Head</div>
        <div>
          {posts.map((post)=>{
            return(
              <p key={post.id}>
              {post.id} - {post.title}
           </p>
            )
           
          })}
        </div>
        
        <section>
                <h1 className="font-bold text-lg">Blog Posts with route</h1>

                <div className="mt-5">
                    {posts.map((post) => {
                        return (
                            <p className="pb-5" key={post.id}>
                                <Link href={`/singleBlog/${post.id}`}>
                                    {post.id} - {post.title}
                                </Link>
                            </p>
                        );
                    })}
                </div>
            </section>
    </main>
  )
}
