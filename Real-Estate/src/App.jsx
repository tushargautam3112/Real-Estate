import Navbar from "./components/Navbar";
import Home from "./routes/home/Home";
import "./layout.css"

function App() {
    return (
      <div className="layout">
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="content">
            <Home/>
        </div>
        
        </div>
    )
}

export default App
