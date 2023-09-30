
import { Post } from "../components/Post";
import { useState, useEffect } from "react";
import axios from 'axios';

export const LandingPage = () => {
    const Obj = [
        "Great",
        "Wow"
    ]
    const [images, setImages] = useState([]);

    const getPosts = async () => {
        // const response = await fetch(`http://localhost:5000/`);
        // var data = await response.text();
        // // data = await data.imagepage.items;
        // console.log(data);
        // // data = JSON.parse(data);
        // setImages(data);
        // return data;

        axios.get("http://localhost:5000"+'/')
        .then((response) => {
        // Handle the received buffer (response.data)
            setImages(response.data.imagepage.items.reverse());
        })
        .catch((error) => {
            console.error('Error fetching buffer:', error);
        });
    }


    useEffect(() => {
        getPosts();
    }, []);
    


    return (
        <>
            {/* <Post src="https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" likes="10" caption="boy blue bg seashore" comments={Obj} liked="true" />
            <Post src="https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=" likes="10" caption="plant growing out of the earth" comments={Obj} liked="false" />
            <Post src="https://randomwordgenerator.com/img/picture-generator/57e0d643425aa814f1dc8460962e33791c3ad6e04e507440712f7bd5904bc1_640.jpg" likes="10" caption="Nature's beauty" comments={Obj} liked="false" />
            <Post src="https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?cs=srgb&dl=pexels-dids-3844788.jpg&fm=jpg" likes="10" caption="colors oil paint" comments={Obj} liked="true" /> */}
            
            {images.map((value, index, arr) => {
                // console.log(value, index, arr);
                // return <Task name={value.task} completed={value.done} index={index} arr={arr} set = {setTasks}/>;
                // console.log(value);
                return <Post key={index} src={value.img.data} likes="1" caption={value.caption} comments={Obj} liked="false" />
            })}
        </>
    )
};