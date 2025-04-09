import React from 'react'

export default function SearchBar() {
    return (
        <div className='w-full h-70 lg:h-100 bg-[url(./rest1.jpg)] bg-center bg-no-repeat bg-cover' >
            <h1 className='text-center font-bold text-4xl text-white drop-shadow-[0_0_8px_black] text h-1/2 py-8 md:text-5xl lg:text-6xl'>Restaurant Gusteau's</h1>
            <div className='flex flex-row justify-center items-center px-10 py-2 md:flex-row md:h-1/2 md:px-30 lg:px-50'>
                <input className='w-full h-10 border px-2 border-white text-white bg-gray-600/70 rounded-l-md' type="text" />
                <button className='w-fit h-10 border px-2 border-white text-white bg-gray-300/70 cursor-pointer rounded-r-md'>
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none">
                        <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button>
            </div>

        </div>
    )
}
