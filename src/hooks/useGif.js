import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const url= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`


const useGif = (tag) => {

    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(false);
    
    const fetchData=async()=>{
      setLoading(true);
      const {data}=await axios.get(tag ? `${url}&tag=${tag}`: url);
      const imageSoucre=data.data.images.downsized_large.url;
      console.log(imageSoucre);
      setGif(imageSoucre);
      setLoading(false);
    }
    useEffect(()=>{
      fetchData();
    },[])

    return {gif,loading,fetchData};
   
}

export default useGif