"use client"
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { useState } from 'react'
import axios from 'axios'


const CreatePost = () => {

  const [image, setImage] = useState<any>("")
  const [caption, setCaption] = useState<string>("")

  function convertBase64(event: any) {
    var reader = new FileReader();
    
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setImage((reader.result)?.toString() || "");
    }
  }

  //change any to event type
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('postImage', image);
    formData.append("caption", caption)
    const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/v1/posts/add-post", formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Required for file uploads
      },
    });
    const data = response.data
    console.log(data)
  }

  return (
    <Popover>
        <PopoverTrigger className="fixed z-20 bottom-5 right-10" asChild>
          <Button className="" variant="secondary">
            Create Post
          </Button>
        </PopoverTrigger>
        <PopoverContent className=" mx-4">
          <div className="flex flex-col gap-2">
            <div>
              <Label htmlFor="picture">Picture</Label>
              <Input onChange={event => setImage(event?.target?.files&& event?.target?.files[0])} id="picture" type="file" />
            </div>
            <div>
              <Label htmlFor="caption">Caption</Label>
              <Input value={caption} onChange={e=>setCaption(e.target.value)} type="text" id="caption" placeholder="Caption" />
            </div>
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </PopoverContent>
      </Popover>
  )
}

export default CreatePost