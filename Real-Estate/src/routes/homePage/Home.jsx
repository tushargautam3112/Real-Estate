import { useContext } from "react";
import SearchBar from "../../components/SearchBar";
import "./Home.scss";
import { AuthContext } from "../../context/AuthContext";

function home() {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
          Welcome to [Real Estate Company Name], your premier destination for finding your dream property. Whether you're buying, selling, or renting, our user-friendly platform offers a diverse range of listings to suit your needs. Explore our extensive collection of homes, apartments, and commercial spaces with ease, backed by detailed information and immersive visuals. With our advanced search tools and expert guidance, your next real estate journey starts here. Discover your perfect space today!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default home