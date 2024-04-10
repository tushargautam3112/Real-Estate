import React, { useContext } from 'react'
import './profileEditPage.scss'
import { AuthContext } from '../../context/AuthContext'

const ProfileEditPage = () => {
  const {currentUser, updateUser} = useContext(AuthContext)
  return (
    <div className='profileEditPage'>
      <div className='formContainer'>
        <form>
          <h1>Edit Profile</h1>
          <div className='item'>
            <label htmlFor='username'>Username</label>
            <input name='username' type='text' placeholder='Username' defaultValue={currentUser.username}/>
          </div>
          <div className='item'>
            <label htmlFor='email'>Email</label>
            <input name='enail' type='email' placeholder='Email' defaultValue={currentUser.email}/>
          </div>
          <div className='item'>
            <label htmlFor='password'>Username</label>
            <input name='password' type='password' placeholder='Password'/>
          </div>
          <button>Update</button>
        </form>
      </div>
      <div className='sideContainer'>
        <img src={currentUser.avatar || '/noavatar.jpg'} alt="" className='avatar'/>
      </div>
    </div>
  )
}

export default ProfileEditPage