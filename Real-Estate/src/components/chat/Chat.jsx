import {useState, userState} from "react";

function Chat() {
    const [chat,setChat]=useState(null)
  return (
    <div className="chat">
        <div className="messages">
            <h2>Messages</h2>
            <div className="message">
                <img src="" alt="" />
                <span>Mr. Bean</span> 
                <p>Lorem ipsum dolor sit.</p> 
            </div>
            <div className="message">
                <img src="" alt="" />
                <span>Mr. Bean</span> 
                <p>Lorem ipsum dolor sit.</p> 
            </div>
            <div className="message">
                <img src="" alt="" />
                <span>Mr. Bean</span> 
                <p>Lorem ipsum dolor sit.</p> 
            </div>
        </div>
        {chat &&
            <div className="chatBox">
            <div className="top">
                <div className="user">
                    <img src="" alt="" />
                    Mr. Bean
                </div>
                <span className='close' onClick={()=>setChat(null)}>X</span>
            </div>
            <div className="center">
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit.</p>
                    <span>1 hour ago</span>
                </div>
            </div>
            <div className="bottom">
                <textarea></textarea>
                <button>Send</button>
            </div>
            
            </div>
        }
    </div>
    
  )
}

export default Chat