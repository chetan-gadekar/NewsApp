 
  import React, { Component } from 'react'
  import loading from './loading.gif'
  
  export default class Spiner extends Component {
    render() {
      return (
        <div className='text-center my-7'>
          <img className='my-3' src={loading} width={50} height={40} alt="loading"/>
        </div>
      )
    }
  }
  