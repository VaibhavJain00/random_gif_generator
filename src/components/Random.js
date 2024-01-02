import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;


const Random = () => {

  const [gif, setGif] = useState('')
  const [loading, setLoading] = useState(false);
  
  const fetchData=async()=>{
    setLoading(true);
    const url= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    const {data}=await axios.get(url);
    const imageSoucre=data.data.images.downsized_large.url;
    console.log(imageSoucre);
    setGif(imageSoucre);
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  const clickHandler=()=>{
    fetchData();
  }

  return (
    <div className='w-1/2  bg-green-400  rounded-lg border border-black flex flex-col items-center gap-y-5 mt-4'>
      <h1 className='text-2xl font-bold underline uppercase mt-5'>Random Gif</h1>
      {

        loading ? (<Spinner/>):(<img src={gif}  width="450"/>)
        
      }

      <button onClick={clickHandler}
        className='w-10/12 bg-green-100 tex-lg py-2 rounded-lg mb-5'
        >
        Generate
      </button>
    </div>
  )
}

export default Random