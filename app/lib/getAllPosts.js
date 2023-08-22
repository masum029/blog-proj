import error from "../blog/error";

export default async function getAllPosts(){

    const response=await fetch("https://jsonplaceholder.typicode.com/posts");

    if(!response.ok){
        throw new Error("Error occourd.........")
    }

    return response.json();
}