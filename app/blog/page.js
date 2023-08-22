import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import styles from '../page.module.css'

export default async function page() {

  const posts=await getAllPosts();

  console.log(posts);
  
  return (
    <main className={styles.main}>
    


    <div>This is blog page.</div>
  
  </main>
  )
}
