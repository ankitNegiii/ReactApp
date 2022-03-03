import React from 'react'
import './Footer.css'



function Footer() {
  return (
    <div className='foot '>
        <div className='footer   p-5'>
            <div className="footText p-5">
             <h1>Suscribe our Newsletter for more updates</h1>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quas quo consequatur voluptas enim eum fuga, quis error magni. Illum.</p>
        </div>
        <div className='footInput p-5 '>
            <input className='text-white border-white p-2 rounded' type="text" placeholder='Text your mail' name="" id="" /><br />
            <button className='footBtn bg-primary mt-3 text-white border-0 p-2 rounded'>Suscribe</button>
        </div>
        </div>
    </div>
  )
}

export default Footer
