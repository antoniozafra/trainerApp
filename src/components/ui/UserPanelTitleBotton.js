import React from 'react'

export const UserPanelTitleBotton = (data) => {

    const {path, title} = data;

    
  return (
        <div className='container.fluid UserPanelTitleBotton titleboton' >
            <a href={path}>
          <span>{title}</span>
        </a>


        </div>



    )
}
