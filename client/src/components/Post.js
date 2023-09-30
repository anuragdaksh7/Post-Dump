import { useState } from "react";

export const Post = (props) => {
    const [liked, setLiked] = useState(eval(props.liked));
    // const heart = (props.liked == ("true"))?"❤️":'🖤';
    const [chatOpen, setChatOpen] = useState("hidden");
    // console.log(props)
    return (
        <div className="flex justify-center mt-4 text-white">
            <div className=" border-2 py-2 px-4 bg-black border-black rounded-lg">
                <div>
                    <img className="h-[400px]" src={props.src} alt="" />
                    <div className="flex justify-between">
                        <button onClick={(e)=>{ setLiked(!liked) }}>{ (liked )?"❤️":'🖤' }</button>
                        <button onClick={(e)=>{(chatOpen==="hidden")?setChatOpen("block"):setChatOpen("hidden")}}>Comments</button>
                    </div>
                    <h2>{ props.caption }</h2>
                </div>
                <div className={chatOpen+" border-t-2"}>
                    <h1>Comments</h1>
                    {props.comments.map((value, index, arr) => {
                        // console.log(value, index, arr);
                        // console.log(value);
                        return <p className="font-light text-sm ps-4" key={index}>{value}</p>
                    })}
                </div>
            </div>
        </div>
    )
}