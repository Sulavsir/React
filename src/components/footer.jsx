import React from 'react'
import Logo from '../logo.svg'

const Footers
 = () => {
  return (
    <div className="footer-below">
      <footer>
        <div className="dummy">
          <h2><img src={Logo} height={80} width={80} /></h2>
          <p>is simply dummy text of the pricing and typesetting industry. Lorem ipsum.</p>
        </div>
        <div className="explore">
          <p>EXPLORE</p>
          <ul>
            <li> SUPPORTS</li>
            <li> ABOUT US</li>
            <li> BLOG</li>
          </ul>
        </div>
          <div className="legal">
            <p>LEGAL</p>
            <ul>
                <li> SUPPORTS</li>
                <li> ABOUT US</li>
                <li> BLOG</li>
            </ul>
         </div>
          <div className="socials">
            <p>SOCIALS</p>
            <ul>
                <li> SUPPORTS</li>
                <li> ABOUT US</li>
                <li> BLOG</li>
            </ul>
         </div> 

      </footer>
      <p>&copy;All rights Reserved.</p>
    </div>
  )
}

export default Footers

