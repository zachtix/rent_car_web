import { Link, NavLink } from 'react-router-dom';
import "@scss/components/Ads.scss";
import img1 from "@assets/Ads/BG_1.png";
import img2 from "@assets/Ads/BG_2.png";

function Ads() {
  return (
    <div className="adsContainer">
      <div className="adsCard">
        <div className="content">
          <h1>The Best Platform for Car Rental</h1>
          <p>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
          <Link className="btnRentCar" to="/category">Rental Car</Link>
        </div>
        <img src={img1} alt="" className="imgBg" />
      </div>
      <div className="adsCard">
        <div className="content">
          <h1>Easy way to rent a car at a low price</h1>
          <p>Providing cheap car rental services and safe and comfortable facilities..</p>
          <Link className="btnRentCar" to="/category">Rental Car</Link>
        </div>
        <img src={img2} alt="" className="imgBg" />
      </div>
    </div>
  )
}

export default Ads