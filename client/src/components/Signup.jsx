import React from 'react'

export default function Signup() {
  return (
    <div>
      Signup
      <div className='container text-center'>
        <div className='row'>
          <div className='col'>
            Sign Up
          </div>
          <div className='col'>
            Log In
            <div className='mb-3'>
              <label htmlFor='username' className='form-label'>Username</label>
              <input type='text' className='form-control' id='username' placeholder='USERNAME' />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>Password</label>
              <input type='password' className='form-control' id='password' placeholder='secret password' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
