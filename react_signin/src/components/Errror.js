import React from 'react'
import { useNavigate } from 'react-router-dom'

const Errror = () => {


    const history = useNavigate();

  return (
    <>
            <div className='container'>
            <div className="error d-flex flex-column justify-content-lg-center align-items-center">
                
                <h4>Sorry we can't log you <br/> Please enter valid email and password</h4>
                <button className='btn btn-primary' onClick={()=>history("/")}>Again Login</button>
            </div>

        </div>
    </>
  )
}

export default Errror