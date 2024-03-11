import React from 'react'

const TopAnimes = ({topAnimes, title}) => {
  return (
    <div className='my-10 w-1/4 mx-5'>
        <h2 className="text-[#FFDD95] text-2xl font-bold mb-12">{title}</h2>
        {topAnimes.map((top, ind) => (
            <>
                <div className='flex gap-6 my-6' key={top.name}>
                    <img src={top.poster} alt="poster" height={76} width={60} className='rounded h-[76px]'/>
                    <div>
                        <h4 className='font-bold text-base'>{top.name}</h4>
                        <p className='text-[#ddd] pt-2'>{top?.otherInfo ? top?.otherInfo[0] : top.type ? top.type : ''}</p>
                    </div>
                </div>
                { ind + 1 < topAnimes.length  && <hr  className="bg-[#ddd] text-[#ddd]" />}
            </>
        ))}
        
    </div>
  )
}

export default TopAnimes