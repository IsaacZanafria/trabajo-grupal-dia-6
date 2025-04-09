import { Link, Route, Routes } from "react-router";
import Home from "./pages/Home";
export default function App() {
  return (
    <>
      <nav className='flex justify-end items-center h-16 bg-cyan-800 shadow-md'>
        <ul className='flex gap-4 px-4 font-semibold text-white'>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/:id?' element={<Home />} />
      </Routes>

    </>
  )
}
