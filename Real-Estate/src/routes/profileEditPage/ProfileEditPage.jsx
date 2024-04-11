import React, { useContext, useState } from 'react'
import './profileEditPage.scss'
import { AuthContext } from '../../context/AuthContext'
import apiRequest from '../../lib/apiRequest' 
import {useNavigate} from "react-router-dom"
import UploadPhotoWidget from '../../components/uploadPhotoWidget/UploadPhotoWidget'

const ProfileEditPage = () => {
  const [error, setError] = useState("")
  const {currentUser, updateUser} = useContext(AuthContext)
  const [avatar, setAvatar] = useState(currentUser.Avatar)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const {username,email,password} = Object.fromEntries(formData)

    try{
      const res = await apiRequest.put(`/users/${currentUser.id}`,{ username, email, password, avatar })
      updateUser(res.data)
      console.log('updated')
      navigate("/profile")
    } catch(err) {
      console.log(err)
      setError(err.response.data.message)
    }
  }
  return (
    <div className='profileEditPage'>
      <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          <h1>Edit Profile</h1>
          <div className='item'>
            <label htmlFor='username'>Username</label>
            <input name='username' type='text' placeholder='Username' defaultValue={currentUser.username}/>
          </div>
          <div className='item'>
            <label htmlFor='email'>Email</label>
            <input name='email' type='email' placeholder='Email' defaultValue={currentUser.email}/>
          </div>
          <div className='item'>
            <label htmlFor='password'>Password</label>
            <input name='password' type='password' placeholder='Password'/>
          </div>
          <button>Update</button>
          {error && <span>error</span>} 
        </form>
      </div>
      <div className='sideContainer'>
        <img src={ currentUser.avatar || '/noavatar.jpg'} alt="" className='avatar'/>
        <UploadPhotoWidget uwConfig={{
          cloudName: "dama6n1ea",
          uploadPreset: "real-estate",
          multiple: false,
          folder: "avatars"
        }}
        setAvatar={setAvatar}
        />
      </div>
    </div>
  )
}

export default ProfileEditPage