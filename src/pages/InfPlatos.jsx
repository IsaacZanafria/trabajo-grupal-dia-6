import React from 'react'

export default function InfPlatos() {
    return (
        <>
            <section className='bg-[url(./fondo.jpg)] h-full flex flex-col items-center gap-4'>

                <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-4 md:mt-6'>Spicy Arrabiata Penne</h1>

                <div className='w-65 md:w-80 md:text-lg lg:text-xl md:my-3 lg:my-5 shadow-md flex flex-col items-center md:flex-row md:justify-around'>
                    <p className='font-semibold tracking-tight'>CATEGORY: <span className='font-light'>Vegetarian</span></p>
                    <p className='font-semibold tracking-tight'>AREA: <span className='font-light'>Italian</span></p>
                </div>

                <h2 className='font-semibold tracking-tight md:text-lg lg:text-xl'>PREPARATION</h2>
                <iframe className='w-[90%] lg:w-230 h-60 md:h-100 lg:h-130 rounded-2xl' src="https://www.youtube.com/embed/1IszT_guI08?si=U6zjxO2tlwgos6dW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <div className='bg-[#f5cda2] w-[90%] shadow-md p-3 flex flex-col items-center rounded-lg'>
                    <h2 className='font-semibold mb-2 tracking-tight md:text-lg lg:text-xl'>INSTRUCTIONS</h2>
                    <p className='text-sm md:text-base lg:text-lg
         text-justify tracking-tight '>Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.</p>
                </div>

                <div className='bg-[#b68a5e] w-65 md:w-75 lg:w-85 shadow-md p-3 flex justify-around rounded-xl mb-8 tracking-tight'>
                    <div className='w-20 flex flex-col items-center '>
                        <p className='font-bold md:text-lg lg:text-xl my-2'>INGREDIENT</p>
                        <ol className='list-decimal font-semibold lg:text-lg'>
                            <li>arroz</li>
                            <li>harina</li>
                            <li>arroz</li>
                            <li>harina</li>
                            <li>arroz</li>
                            <li>harina</li>
                            <li>arroz</li>
                            <li>harina</li>
                            <li>arroz</li>
                            <li>harina</li>
                            <li>arroz</li>
                            <li>harina</li>
                            <li>arroz</li>
                            <li>harina</li>
                            <li>arroz</li>
                            <li>harina</li>
                            <li>arroz</li>
                            <li>harina</li>
                            <li>arroz</li>
                            <li>harina</li>
                        </ol>
                    </div>
                    <div className='w-20 flex flex-col items-center '>
                        <p className='font-bold md:text-lg lg:text-xl my-2'>MEASURE</p>
                        <ul className='lg:text-lg'>
                            <li>100 gr</li>
                            <li>300gr</li>
                            <li>100 gr</li>
                            <li>300gr</li>
                            <li>100 gr</li>
                            <li>300gr</li>
                            <li>100 gr</li>
                            <li>300gr</li>
                            <li>100 gr</li>
                            <li>300gr</li>
                            <li>100 gr</li>
                            <li>300gr</li>
                            <li>100 gr</li>
                            <li>300gr</li>
                            <li>100 gr</li>
                            <li>300gr</li>
                            <li>100 gr</li>
                            <li>300gr</li>
                            <li>100 gr</li>
                            <li>300gr</li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}
