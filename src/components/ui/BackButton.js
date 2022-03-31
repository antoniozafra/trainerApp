import React from 'react'

export const BackButton = (data) => {
  return (
    

    <button className='btn btn-danger mt-1 btnAdmin'>
        <a className='text-white' href={data.path}>
            {data.title}
        </a>

    </button>
  )
}
