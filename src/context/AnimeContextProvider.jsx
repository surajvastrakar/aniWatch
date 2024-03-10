import React, { useState } from 'react'
import AnimeContext from './AnimeContext'

const animeContextProvider = ({children}) => {
    const [animeInfo, setAnimeInfo] = useState([]);
  return (
    <AnimeContext.Provider value={{animeInfo, setAnimeInfo}}>
      {children}
    </AnimeContext.Provider>
  )
}

export default animeContextProvider
