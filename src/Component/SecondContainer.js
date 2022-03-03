import React from 'react'

const SecondContainer = (props) => {
  return (
    <div>
        <div   className="box1  bg-white p-4 m-3">
        <div style={{color:"rgb(5,171,239)"}}>{props.img}</div>
                  <h4>{props.head}</h4>
                  
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, doloremque ratione. Nihil assumenda laboriosam quod praesentium illum consequatur natus excepturi?</p>
              </div>   
    </div>
  )
}

export default SecondContainer
