import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col items-center mt-20  m-0'>
        {children}
    </div>
  )
}

export default Layout