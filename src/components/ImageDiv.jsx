import React from 'react'

export default function ImageDiv() {

  // const [ image, setImage ] = useState([])


  //   async function getImage() {
  //       try {
  //           const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;
  //           console.log(url)
  //           const response = await fetch(url);
  //           const data = await response.json()
  //           setImage(data)
  //       } catch (error) {

  //       }
  //   }

  //   useEffect(() => { 
  //     getImage()
  // }, [])

  return (
    <div className='bg-[#FEFAE0] flex justify-center py-6'>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-6 ml-6 mt-6 mx-auto md:mx-auto md:ml-12 md:mr-12 md:gap-4 items-center">
        <img className="aspect-video w-80 h-60 object-cover" src="https://picsum.photos/200/300" alt="" />
        <img className="aspect-video w-80 h-60 object-cover" src="https://picsum.photos/200/300" alt="" />
        <img className="aspect-video w-80 h-60 object-cover" src="https://picsum.photos/200/300" alt="" />
        <img className="aspect-video w-80 h-60 object-cover" src="https://picsum.photos/200/300" alt="" />
        <img className="aspect-video w-80 h-60 object-cover" src="https://picsum.photos/200/300" alt="" />
        <img className="aspect-video w-80 h-60 object-cover" src="https://picsum.photos/200/300" alt="" />
        <img className="aspect-video w-80 h-60 object-cover" src="https://picsum.photos/200/300" alt="" />
        <img className="aspect-video w-80 h-60 object-cover" src="https://picsum.photos/200/300" alt="" />
        <img className="aspect-video w-80 h-60 object-cover" src="https://picsum.photos/200/300" alt="" />
      </div>
    </div>
  )
}
