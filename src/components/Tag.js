import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import useGif from '../hooks/useGif';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;


const Tag = () => {

  // const [gif, setGif] = useState('')
  // const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("car");
  
  // const fetchData=async()=>{
  //   setLoading(true);
  //   const url= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
  //   const {data}=await axios.get(url);
  //   const imageSoucre=data.data.images.downsized_large.url;
  //   console.log(imageSoucre);
  //   setGif(imageSoucre);
  //   setLoading(false);
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[])

  const {gif,loading,fetchData}=useGif(tag);
  return (
    <div className='w-1/2 bg-blue-400  rounded-lg border border-black flex flex-col items-center gap-y-5 mt-4'>
      <h1 className='text-2xl font-bold underline uppercase mt-5'>Random {tag} Gif</h1>
      {

        loading ? (<Spinner/>):(<img src={gif}  width="450"/>)
        
      }

      <input
        className='w-10/12 tex-lg py-2 rounded-lg mb-1  text-center'
        onChange={(event)=>setTag(event.target.value)}
        value={tag}
      />
      <button onClick={()=>fetchData()}
        className='w-10/12 bg-blue-100 tex-lg py-2 rounded-lg mb-5'
        >
        Generate
      </button>
    </div>
  )
}

export default Tag