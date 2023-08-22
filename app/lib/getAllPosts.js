import error from "../blog/error";

export default async function getAllPosts(){

    const response=await fetch("https://basic-blog.teamrabbil.com/api/post-newest");
    //const response=await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    

    if(!response.ok){
        throw new Error("Error occourd.........")
    }

    return response.json();
}