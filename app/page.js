import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = async() =>  {
  const data = await fetch('https://api.imgflip.com/get_memes')
  const response = await data.json()
  console.log(response.data.memes);
  return (
    <>
     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-6">
      <h1 className="text-center text-4xl font-extrabold text-fuchsia-500 mb-8 drop-shadow-md">
        Meme Maker
      </h1>

      <div className="flex justify-center gap-6 flex-wrap">
        {response.data.memes.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-xs w-full flex flex-col items-center"
          >
            <Image
              src={item.url}
              width={200}
              height={200}
              alt={item.name}
              className="rounded-md"
            />
            <p className="mt-3 text-gray-700 text-center font-medium">
              {item.name.length > 10 ? `${item.name.slice(0, 10)}...` : item.name}
            </p>
            <Link
              href={{
                pathname: 'create_meme',
                query: { url: item.url, id: item.id },
              }}
            >
              <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition">
                Generate This Meme
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Home
