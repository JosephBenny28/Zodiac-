import React from 'react'
import './Login.css'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

const Login = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const submit = (data) => console.log(data)
  return (
    <>

      <div className='login '>
        <div className='login-main'>
          <h2 >Login Here</h2>
          <form id='form' className='form-main' onSubmit={handleSubmit(submit)}>
            <input
              type="text"
              placeholder="Email"
              {...register("Email", {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.Email && <p className='error'>{errors.Email.message}</p>}

            <input
              type="password"
              placeholder="password"
              {...register("password", {
                required: 'Password is required',
                minLength: {
                  value: 5,
                  message: 'Password must have at least 8 characters',
                },
                maxLength: {
                  value: 15,
                  message: 'Password cannot exceed 15 characters',
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,
                  message: 'Password is invalid',
                },
              })}
            />
            {errors.password && <p className='error'>{errors.password.message}</p>}

            <button>Submit</button>
            <Link type="button" to="/" className=" back m-3"> Back to home</Link>
          </form>
        </div>
      </div>

    </>
  )
}

export default Login