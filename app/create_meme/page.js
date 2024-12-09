"use client"

import React, { useRef, useState } from 'react'

const Creatememe = ({ searchParams }) => {
    const [img , setImg] = useState('')
    const text1 = useRef()
    const text2 = useRef()

    const createMeme = async (event) =>{
        event.preventDefault()
        console.log(text1.current.value);
        console.log(text2.current.value);
    
         const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=mabdullah6600&password=asdfgfdsa123&text0=${text1.current?.value}&text1=${text2.current?.value}` , {
            method: 'POST'
         })
         const response = await data.json()
         console.log(response.data.url);
         setImg(response.data.url)
        }
  return (
    <>
       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-xl font-semibold text-gray-800 mb-4">
        Create Meme from Image
      </div>
      <div className="relative">
        <img 
          className="w-[300px] border-2 border-gray-300 rounded-lg shadow-md" 
          src={searchParams.url} 
          alt="Meme Base" 
        />
      </div>

      <form 
        onSubmit={createMeme} 
        className="mt-4 flex flex-col items-center bg-white p-6 rounded-lg shadow-lg space-y-4"
      >
        <input
          type="text"
          placeholder="Enter text 1"
          ref={text1}
          className="w-full px-3 py-2 border text-neutral-700  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Enter text 2"
          ref={text2}
          className="w-full px-3 py-2 border  text-neutral-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
        >
          Create Meme
        </button>
      </form>

      {img && (
        <div className="mt-6">
          <div className="text-lg font-semibold mb-2 text-gray-800">
            Your Meme:
          </div>
          <img 
            className="w-[300px] border-2 border-gray-300 rounded-lg shadow-md" 
            src={img} 
            alt="Generated Meme" 
          />
        </div>
      )}
    </div>
</>
  )
}

export default Creatememe
