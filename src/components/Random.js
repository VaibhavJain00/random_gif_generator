import React from 'react'
import Spinner from '../components/Spinner';
import useGif from '../hooks/useGif';



const Random = () => {

  const{gif,loading,fetchData}=useGif();

  return (
    <div className='w-1/2  bg-green-400  rounded-lg border border-black flex flex-col items-center gap-y-5 mt-4'>
      <h1 className='text-2xl font-bold underline uppercase mt-5'>Random Gif</h1>
      {

        loading ? (<Spinner/>):(<img src={gif}  width="450"/>)
        
      }

      <button onClick={()=> fetchData()}
        className='w-10/12 bg-green-100 tex-lg py-2 rounded-lg mb-5'
        >
        Generate
      </button>
    </div>
  )
}

export default Random