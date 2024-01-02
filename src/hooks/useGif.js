import React from 'react'

const useGif = () => {
    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(false);
    const [tag, setTag] = useState("");
    
    const fetchData=async()=>{
      setLoading(true);
      const url= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
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
  
   
}

export default useGif