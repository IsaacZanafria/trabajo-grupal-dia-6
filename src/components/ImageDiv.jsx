import React from 'react'
import useData from '../hooks/useData'
import { useParams } from 'react-router'


export default function ImageDiv() {
  const {id} = useParams()
  
  
const {response} = useData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id || "Beef"}`)
  console.log(response)
  return (
    <div className='bg-[#FEFAE0] flex justify-center py-6'>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mx-3  py-6 md:mx-auto md:ml-12 md:mr-12 md:gap-4 items-center">
        
        {
          response?.meals?.map((image) => {
            return (
              <img
              key={image.idMeal} 
              className="aspect-video w-80 h-60 object-cover rounded-xl shadow-gray-600 shadow-lg hover:scale-104 hover:border-2 cursor-pointer" 
              src={image.strMealThumb} 
              alt={image.strMeal} />
            )

          })
        }
        </div>
    </div>
  )
}
