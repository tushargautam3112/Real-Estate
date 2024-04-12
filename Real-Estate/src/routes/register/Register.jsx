import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import apiRequest from '../../lib/apiRequest'
import "./Register.scss"

const Register = () => {
    const [error,setError] = useState("")
    const [isLoading, setIsLoading] = useState("")
    const navigate = useNavigate()
     const handleSubmit = async (e)=>{
        e.preventDefault()
        setIsLoading(true)
        setError("")
        const formData = new FormData(e.target)
        const username = formData.get("username")
        const email = formData.get("email")
        const password = formData.get("password")

        try{
            const res = await apiRequest.post("/auth/register",{
                username,email,password
            })
            navigate("/login")
        }
        catch(err){
            console.log(err.response.data.message)
            setError(err.response.data.message)
        } finally{
            setIsLoading(false)
        }
        
    }
  return (
    <div className='register'>
        <div className='formContainer'>
            <form onSubmit={handleSubmit}>
                <h1>Create an Account</h1>
                <input name="username" type="text" placeholder="Username"/>
                <input name="email" type="text" placeholder="Email"/>
                <input name="password" type="password" placeholder="Password"/>
                <button disabled={isLoading}>Register</button>
                {error && <span>{error}</span>}
                <span>By creating an account you agree to our <span>Terms of Service and Privacy Policy.</span></span>
                <Link to="/login">Already have an account?</Link>
            </form>
        </div>
        <div className='imgContainer'>
            <img src="home3.jpeg" alt=""/>
        </div>
    </div>
  )
}

export default Register