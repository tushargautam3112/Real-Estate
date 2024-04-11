import { useState,useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import "./login.css"
import { Link, useNavigate } from "react-router-dom"
import apiRequest from "../../lib/apiRequest"

export default function Login() {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState("")
  const {updateUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    const formData = new FormData(e.target)
    const username = formData.get("username")
    const password = formData.get("password")

    try {
      const res = await apiRequest.post("/auth/login", {
        username, password
      })
      updateUser(res.data)
      navigate("/")
    }
    catch (err) {
      console.log(err.response.data.message)
      setError(err.response.data.message)
    } finally {
      setIsLoading(false)
    }

  }
  return (
    <div className='login'>
      <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          <h1>Welcome Back</h1>
          <input name="username" required minLength={3} type="text" placeholder="Username" />
          <input name="password" required minLength={4} type="password" placeholder="Password" />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">New Here?</Link>
        </form>
      </div>
      <div className='imgContainer'>
        <img src="bg.png" alt="" />
      </div>
    </div>
  )
}