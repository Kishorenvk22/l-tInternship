import React, { useState } from 'react'

function Account() {
  
  const user = JSON.parse(localStorage.getItem('user'));
  const name = user[0].email
  return (
    <div className='w-full h-screen bg-[#1a1a1a] text-white flex justify-center items-center'>
      <h2 className='text-3xl'>Wecome</h2>
      <h1>{name}</h1>

    </div>
  )
}

export default Account