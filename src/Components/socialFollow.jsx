import React from 'react'
import youtube from '../Assets/youtube.png'
import linkedin from '../Assets/linkedin.png'
import gmail from '../Assets/gmail.png'
import telegram from '../Assets/telegram.png'
import instagram from '../Assets/insta.png'
import '../Components/socialfollow.css'

const socialFollow = () => {
  return (
    <div className='socialContent'>
        <a href="https://www.linkedin.com/company/amandx-india-private-limited/">
            <img src={linkedin} width="50px" height="50px" className="icon" />
        </a>
        <a href="https://www.instagram.com/amandx_india/">
            <img src={instagram} width="50px" height="50px" className="icon" />
        </a>
        <a href="mailto:info@amandx.com">
            <img src={gmail} width="50px" height="50px" className="icon" />
        </a>
        <a href="#telegram">
            <img src={telegram} width="50px" height="50px" className="icon" />
        </a>
        <a href="#youtube">
            <img src={youtube} width="50px" height="50px" className="icon" />
        </a>
    </div>
  )
}

export default socialFollow