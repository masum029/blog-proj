export default async function getBlogPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    //const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`);

    
    if (!res.ok) {
        throw new Error("Error fetching post");
    }
    return res.json();
}
