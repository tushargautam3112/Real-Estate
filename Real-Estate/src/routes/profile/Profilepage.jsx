import React from 'react'
import Listt from '../../components/list/Listt';
// import "./profilepage.scss";
import "./profilepage.scss"


function Profilepage() {
  return (
    <div className='profilePage'>
       <div className='details'>
        <div className="wrapper">
            <div className="title">
                <h1>User Information</h1>
                <button>Update Profile</button>
            </div>
            <div className="info">
                <span>
                    Avatar:
                    <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" />
                </span>
                <span>Username: <b>xyz</b></span>
                <br />
                <span>Email : <b>xyz@gmail.com</b></span>
            </div>
            <div className="title">
                <h1>My List</h1>
                <button>Create New Post</button>
            </div>
            <Listt/>
            <div className="title">
                <h1>Saved List</h1>
            </div>
            <Listt/>
        </div>
        <div className="chatContainer">
            <div className="wrapper">chat</div>
        </div>
       </div>
    </div>
  )
}

export default Profilepage