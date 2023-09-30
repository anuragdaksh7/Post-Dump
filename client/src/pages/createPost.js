
import { useState } from "react";
import axios from "axios";

export const NewPost = () => {

    const [img, setImg] = useState("");
    const [cap, setCap] = useState("");
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // console.log(cap,img)
        const data = {
            caption: cap,
            img: img
        };
        const response = await axios.post("http://localhost:5000"+'/postit', data)
        // .then((response) => {console.log(1)
        //     // Handle the response as needed
        // })
        // .catch((error) => {
        //     console.error('Error creating post:', error);
        //     // Handle errors as needed
        // });
        var dataa = await response;
        if(dataa.data === 'Posted'){
            window.location.href = '/';
        }
        
    }
    
    const cnvB64 = (event) => {
        // console.log(event);
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
            // console.log(reader.result);
            setImg(reader.result);
        }
    }


    return (
    <div className="flex justify-center mt-20 ">
        <form className="bg-white w-fit p-4 shadow-sm shadow-white rounded-xl" action="http://localhost:5000/postit" onSubmit={ handleSubmit } method="POST">
            
            <div>
                <input className="outline-none w-full px-2 font-semibold text-xl py-1 rounded-xl" type="text" id="name" placeholder="caption..." name="caption" value={cap} onChange={(e)=>{setCap(e.target.value)}} required />
            </div>
            <div className="mt-2">
                <label className="bg-white text-gray-600 text-md font-semibold mx-2" >Upload Image here</label>
                <input className="text-xs font-semibold text-red-500" onChange={ cnvB64 } type="file" id="image" name="image" required />
            </div>
            {
                (img==="")?null:<img className="h-[400px]" src={img} alt="" />
            }
            <div>
                <button className="px-2 w-full my-2 text-center bg-blue-500 py-1 text-white font-bold rounded-xl mt-4 " type="submit">Submit</button>
            </div>
            
        </form>
    </div>
    );
};
