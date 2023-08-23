import Image from 'next/image'
import styles from './page.module.css'
import getAllPosts from './lib/getAllPosts';
import Link from 'next/link';

export default async function Home() {
  const posts= await getAllPosts();
  return (
    <main className={styles.main}>
       <section> <h1 className="font-bold text-lg">Home Page -Section One </h1></section>
     <section>
                <h1 className="font-bold text-lg">Blog Posts- Section Two</h1>

                <div className="mt-5">
                    {posts.map((post) => {
                        return (
                            <p className="pb-5" key={post.id}>
                                {/* <Link href={`/about/${post.id}`}>
                                    {post.id} - {post.title}
                                </Link> */}

                                <Link href={`/single-blog/${post.id}`}>
                                {post.id} - {post.title}
                                </Link>
                            </p>
                        );
                    })}
                </div>
            </section>
            <section> <h1 className="font-bold text-lg">Home Page -Section Three </h1></section>
    </main>
  )
}
