import React,{Suspense, useContext} from 'react'
import Listt from '../../components/list/Listt';
import "./profilepage.scss"
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';
import { Link,Await,useLoaderData } from 'react-router-dom';
import Chat from '../../components/chat/Chat';


function Profilepage() {
    const data = useLoaderData();
    const {updateUser, currentUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = async () => {
        try{
            await apiRequest.post("/auth/logout")
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
                <h1>Profile</h1>
                <Link to='/profile/edit'>
                    <button>Edit Profile</button>
                </Link>
            </div>
            <div className="info">
                <span>
                    <img src={currentUser.avatar || "noavatar.jpg"} alt="" className='profileAvatar'/>
                </span>
                <span><b>{currentUser.username}</b></span>
                <br />
                <span>Email: <b>{currentUser.email}</b></span>
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
       </div>
        <div className="chatContainer">
             <div className="wrapper">
               <Suspense fallback={<p>Loading...</p>}>
                    <Await
                    resolve={data.chatResponse}
                    errorElement={<p>Error loading chats!</p>}
                    >
                    {(chatResponse) => <Chat chats={chatResponse.data}/>}
                   </Await>
               </Suspense>
            </div>
        </div>
    </div>
  )
}

export default Profilepage