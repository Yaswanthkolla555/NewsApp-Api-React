import React from 'react'
import Spinner from './Spinner.gif'
const Loader=()=> {
    return (
      <div className='text-center'>
        <img src={Spinner} alt="Spinner" />
        <h1 className="" style={{color:'blue'}}>Loading</h1>
      </div>
    )
}
export default Loader