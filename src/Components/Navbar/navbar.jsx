import React from 'react'
import companylogo from '../../Assets/final.png'
import './navbar.css'
import companycontact from "../../Assets/contact.png"


const navbar = () => {
  
  function myFunction(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  return (
    <div className='topnav' id='topnav'>
      <div>
        <a href="/" class="active"><img src={companylogo} className='companylogo' /><b>AmanDX</b></a>
      </div>

      <div>
        <a href="/">Home</a>
        <a href="/aboutUs">Our Story</a>
        <a href="#contact">Products and Services</a>
      </div>

      <div>
        <a to="contacts"><img src={companycontact} className='companycontacts' /></a>
      </div>
      

      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  )
}

export default navbar