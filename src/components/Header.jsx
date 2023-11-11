import React from 'react'

const Header = () => {
  return (
    <div>
      <input className='border-2 w-12% p-2 m-2' type="text" placeholder='What Country you looking for today?'/>
      <button className='bg-blue-600 text-white border-2 p-2'>Search</button>
    </div>
  )
}

export default Header
