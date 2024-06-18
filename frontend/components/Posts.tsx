"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { toast, useToast } from "./ui/use-toast"

interface Posts {
  id: string,
  caption: string,
  numLikes: number,
  img: string,
  createdAt: string,
  updatedAt: string,
}

const Posts = () => {
  const [posts, setPosts] = useState<Posts[]>([])

  const { toast } = useToast()

  const fetchAllPosts = async () => {
    if (!process.env.NEXT_PUBLIC_BACKEND_URL) return
    const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/v1/posts")
    const data = response.data;
    // console.log(data.data)
    if (data.status === 200) {
      toast({
        title: data.message
      })
      setPosts(data.data)
    }
  }

  useEffect(()=> {
    fetchAllPosts()
  },[])

  return (
    <div className="flex justify-center pt-24 bg-popover h-[100lvh]">
    <div className=" font-mono flex flex-col justify-center gap-8">
      {
        posts&& posts.map((post, idx) => {
          return (
            <div key={idx} className=" max-w-[500px] bg-primary-foreground border-2 px-4 py-4 rounded-lg">
              <div style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_BACKEND_URL+"/images/"+post.img})`,
                backgroundSize: "cover",
                backdropFilter: "blur(8px)",
              }} className=" rounded-lg max-w-[500px] h-[500px] max-h-[500px] flex justify-center items-center bg-gray-200">
                <div style={{
                  backdropFilter: "blur(5px)",
                  }} className=" rounded-lg w-full h-full flex justify-center items-center">
                  <img className=" max-h-[500px] rounded-lg" src={process.env.NEXT_PUBLIC_BACKEND_URL+"/images/"+post.img} />
                </div>
              </div>
              <div className="flex justify-between items-center px-4 py-1">
                <p className=" line-clamp-1">{post.caption}</p>
                <p>{post.numLikes}</p>
              </div>
              <div className="flex justify-between items-center px-4  text-sm">
                <p>Posted on {(new Date(post.createdAt)).toLocaleDateString()}</p>
                <p>Comment</p>
              </div>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Posts