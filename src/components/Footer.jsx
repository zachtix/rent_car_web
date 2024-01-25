import { Link, NavLink } from 'react-router-dom';
import "@scss/components/Footer.scss"

function Footer() {
  return (
    <>
    <div className="footer">
      <div className="container">
        <div className="topContent">
          <div className="leftContent">
            {/* <h1 className="logo">MORENT</h1> */}
            <Link className="logo" to="/" >MORENT</Link>
            <p>Our vision is to provide convenience and help increase your sales business.</p>
          </div>
          <div className="rightContent">
            <div className="about">
              <h2>About</h2>
              <ul>
                <li><Link to="/">How it works</Link></li>
                <li><Link to="/">Featured</Link></li>
                <li><Link to="/">Partnetship</Link></li>
                <li><Link to="/">Bussiness Relation</Link></li>
              </ul>
            </div>
            <div className="community">
              <h2>Community</h2>
              <ul>
                <li><Link to="/">Event</Link></li>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/">Podcast</Link></li>
                <li><Link to="/">Invite a friend</Link></li>
              </ul>
            </div>
            <div className="socials">
              <h2>Socials</h2>
              <ul>
                <li><Link to="/">Discord</Link></li>
                <li><Link to="/">Instagram</Link></li>
                <li><Link to="/">Twitter</Link></li>
                <li><Link to="/">Facebook</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footerContent">
          <p className="leftContent">
            ©2022 MORENT. All rights reserved
          </p>
          <div className="rightContent">
            <a href="">Privacy & Policy</a>
            <a href="">Terms & Condition</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer