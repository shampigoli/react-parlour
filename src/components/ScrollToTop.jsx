
import { useState } from 'react'
import {FaChevronUp} from 'react-icons/fa'

function ScrollToTop() {
  const [visible,setVisible]=useState(false)
  window.addEventListener("scroll", ()=>{
    window.pageYOffset  > 100 ? setVisible(true) : setVisible(false)
  })
  return (
    <>
    <div className='scroll'>
      <a href="#" className={`${visible ? "block" : "none"}`}>
        <FaChevronUp/>
      </a>
    </div>
    </>
  )
}

export default ScrollToTop