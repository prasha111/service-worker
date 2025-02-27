import React from 'react'

function Home() {
  return (
    <div> 
          <div className='header'>
    {['home', 'user', 'settings'].map((some, index)=>{
        return (
            <a href={`${some === 'home'? "/":some}`} className='header-a'>{some}
            </a>
        )
    })}
    </div>
    </div>
  )
}

export default Home;