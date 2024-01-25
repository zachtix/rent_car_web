import Ads from "@components/Ads"
import PopularCar from "@components/PopularCar"
import RecomenCar from "@components/RecomenCar"
import "@scss/pages/Home.scss"
import { useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';

function Home() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="homePage">
      <div className="container">
        <Ads />
        <div className="popularCarRent">
          <div className="title">
            <p>Popular Car</p>
            <Link to="/projects">View All</Link>
          </div>
          <PopularCar />
        </div>
        <div className="recomenCarRent">
          <div className="title">
            <p>Recomendation Car</p>
          </div>
          <RecomenCar />
          <Link className="btnMoreCar" to="/category">Show nore car</Link>
        </div>
      </div>
    </div>
  )
}

export default Home