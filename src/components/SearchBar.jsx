import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchGen() {
    const [inpValue, setInpValue] = useState('');
    const navigate = useNavigate();

    function handleInputChange(e) {
        setInpValue(e.target.value);
    }

    function handleClick() {
        if (inpValue.trim() !== '') {
            navigate(`/${inpValue}`);
        }
        else {
            alert("Please enter a valid search term.");
        }
    }

    return (
        <div className="w-full h-70 lg-h-100 bg-[url(./rest1.jpg)] bg-center bg-no-repeat bg-cover">
            <h1 className="text-center font-bold text-dxl text-white drop-shadow-[0_0_8px_black] h-1/2 py-8 md:text-5xl lg:text-6xl">Restaurant Museum's</h1>
            <div className="flex flex-row justify-center items-center px-10 py-2 md:flex-row md:h-1/2 md:px-30 lg:px-50">
                <input 
                    className="w-full h-10 border px-2 border-white text-white bg-gray-680/70 rounded-l-md"
                    placeholder="Search..."
                    type="text"
                    value={inpValue}
                    onChange={handleInputChange}
                />
                <button
                    className="w-fit h-10 border px-2 border-white text-white bg-gray-380/70 cursor-pointer rounded-r-md"
                    onClick={handleClick}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6 h-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}