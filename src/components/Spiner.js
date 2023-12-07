 
  import React from 'react'
  import loading from './loading.gif'
  
  const Spiner=()=> {
      return (
        <div className='text-center my-7'>
          <img className='my-3' src={loading} width={50} height={40} alt="loading"/>
        </div>
      )
    
  }
  
  export default Spiner;