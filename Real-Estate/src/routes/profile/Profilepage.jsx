import React,{useContext} from 'react'
import Listt from '../../components/list/Listt';
import "./profilepage.scss"
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';


function Profilepage() {
    const {updateUser, currentUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = async () => {
        try{
            await apiRequest.post("auth/logout")
            updateUser(null)
            navigate("/")
        } catch(err){
            console.log(err)
        }
    }
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
                    <img src={currentUser.avatar || "noavatar.jpg"} alt="" />
                </span>
                <span>Username: <b>{currentUser.username}</b></span>
                <br />
                <span>Email : <b>{currentUser.email}</b></span>
            </div>
            <button onClick={handleLogout}>Logout</button>
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