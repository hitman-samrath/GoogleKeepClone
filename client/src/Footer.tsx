import React from 'react'
import './App.css'

const Footer: React.FC = () => {
  return (
    <>
      <div className='bg-black w-full h-auto fixed bottom-0'>
      <a href="https://www.instagram.com/samrathsinghrohit/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" id="insta"></i></a>
      <a href="https://linkedin.com/in/samrath-singh-kalra/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" id="linkedin"></i></a>
      <a href="https://github.com/hitman-samrath" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" id="github"></i></a>
        <p className='text-white'>Created by <span className='text-yellow-400'>Samrath Singh Kalra</span></p>
      </div>
    </>
  )
}

export default Footer