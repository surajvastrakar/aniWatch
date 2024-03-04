import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  // const navigate = useNavigate();
  // const handleFunc = () => {
  //   navigate("/HomePage")
  // }
  const [searchQuery, setSearchQuery] = useState("")
  const [anime, setAnime] = useState([])
  const searchAnime = async(name) => {
    const resp = await fetch(`https://api-aniwatch.onrender.com/anime/search?q=${searchQuery}&page=1`);
    const data = await resp.json();
    const temp = await data.animes
    setAnime(temp);
  }

  useEffect(() => {
    setTimeout(() => {
      (searchQuery.length > 2) ? searchAnime(searchQuery) : setAnime([])
    }, 1000);
  }, [searchQuery])

  return (
    <div className='flex h-18 px-10 items-center gap-10  h-16'>
        <Link to="/">
          <img src="src/assets/logo.png" alt="logo" className='h-10' />
        </Link>
        <div>
          <input type="search" placeholder='Search anime...' className='relative bg-white text-black w-80 h-10' onChange={e => setSearchQuery(e.target.value)} />
          {
            (anime.length) ?
          (  
          
            <ul className='absolute z-10 w-80 h-80 overflow-y-scroll bg-[#414248] text-[#aaa] text-sm'>
              {
                anime?.map(e => 
                  (
                  <Link to={`/anime-info/${e.id}`}>
                    <li className='cursor-pointer py-2 border-b-[1px] border-dashed border-[#5c5d63]'>
                      <div className='flex ps-2'>
                        <img src={e.poster} alt="poster" width={50} height={70} />
                        <div className='mx-2 w-60'>
                          <h3 className="font-bold text-base text-white truncate">{e.name}</h3>
                          <p className='text-[#aaa] truncate'>{e.name}</p>
                          <div>
                            <span>{e.type}</span>
                            <span className='text-white ml-2'>{e.duration}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </Link>)
                )
              }
            </ul>
          ) : <div></div>
          }
        </div>
        {searchQuery}
        {/* <p onClick={handleFunc}>Dummy</p> */}
        <p>
          <Link to="/dummy">
            Dummy
          </Link></p>
    </div>
  )
}

export default Navbar
