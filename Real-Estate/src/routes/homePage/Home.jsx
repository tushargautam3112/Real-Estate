import { useContext } from "react";
import SearchBar from "../../components/SearchBar";
import "./Home.scss";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function home() {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
          Welcome to Blissful Abodes, your premier destination for finding your dream property. Whether you're buying, selling, or renting, our user-friendly platform offers a diverse range of listings to suit your needs. Explore our extensive collection of homes, apartments, and commercial spaces with ease, backed by detailed information and immersive visuals. With our advanced search tools and expert guidance, your next real estate journey starts here. Discover your perfect space today!
          </p>
          <SearchBar />
          
          <section id="about">
            <h1>About</h1>
            <p>
            At Blissful Abodes, we understand that a home is more than just a place to live, it's a haven where cherished memories are made and dreams are nurtured. Our mission is to guide you on your journey to discovering the ideal abode where you can truly thrive and find peace amidst life's adventures.
            </p>

            <p>
            With our extensive network of trusted real estate professionals and our commitment to personalized service, Blissful Abodes is your trusted partner every step of the way. Whether you're seeking a cozy cottage nestled in a quiet neighborhood, a sleek urban loft with skyline views, or a sprawling estate with acres of lush landscape, we're here to help you find the perfect match. Explore our curated listings, discover hidden gems, and let us turn your vision of blissful living into a reality. Welcome home to Blissful Abodes.

            <a href="./list">
              <button>Explore</button>
            </a>
            </p>
          </section>

          <section id="contact">
            <h1>Get in Touch!</h1>
            <div className="contact-text">
              <div className="contact-items">
                <img src="/pin.png" alt="" />
                <li>Headquarters</li>
                <li>Dwarka, New Delhi</li>
                <li>Delhi, 110011</li>
              </div>
              <div className="contact-items">
                <img src="/phone.png" alt="" />
                <li>+91 1234567890</li>
                <li>+91 9876543210</li>
                <li>+91 8765432109</li>
              </div>
              <div className="contact-items">
                <img src="/email.png" alt="" />
                <li>info@blissfulabodes.com</li>
                <li>sales@blissfulabodesrealestate.com</li>
                <li>support@blissfulabodesproperties.in</li>
              </div>
              

            </div>
          </section>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/homepic.png" alt="" />
        <img src="/homepic2.jpeg" alt="" />
        <img src="/homepic3.jpeg" alt="" />
      </div>
    </div>
  )
}

export default home