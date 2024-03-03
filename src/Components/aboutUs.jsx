import React from 'react'
import Aman from '../Assets/aman.jpg'
import Anand from '../Assets/anand.jpg'
import './aboutUs.css'

const aboutUs = () => {
  return (
    <div className='aboutus'>
        <h1>OUR STORIES</h1>
        <h3> - ABOUT US - </h3>
        <p>Amandx India is an enterprise with manufacturing expertise and selling it globally as well as locally.</p>
        <p>"अमैंडक्स इंडिया के साथ अपने अनुभव को ऊँचाईयों तक बढ़ाएं - जहाँ गुणवत्ता और जज्बा मिलता है।"</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <h3> - MANAGEMENT - </h3>
        <div className='management'>
            <div className='teamcard'>
                <div className='cardfront'>
                    <img src={Aman} alt='Aman'/>
                    <div className='container'>
                        <h4><b>Mr. Aman Kumar</b></h4>
                        <h6>Finance Director</h6>
                        <div className='box'><a className='button' href='#popout1'>Know More</a></div>
                    </div> 
                </div>

                <div id='popout1' className='overlay'>
                <div className='popout'>
                    <h4><b>Mr. Aman Kumar</b></h4>
                    <a className="close" href="#">&times;</a>
                    <p>Mr. Aman Kumar stands as a fearless and motivating young entrepreneur in the vibrant landscape of contemporary India. Right from his early years, Aman Kumar exhibited a distinct flair for business, laying down roots that would eventually redefine success in innovative ways. His visionary approach and adept business strategies serve as a beacon of inspiration for the aspiring youth of our nation.</p>
                    <p>Aman Kumar's journey is a testament to his dreams, resilience, and unwavering belief in his pursuits. As a visionary and a dreamer, he not only achieves success but also becomes an extraordinary and inspiring individual. Aman Kumar, through his endeavors, is not just shining but also elevating the pride of the nation, emerging as an idol for the developing generation.</p>
                </div>
                </div>
            </div>

            <div className='teamcard'>
                <div className='cardfront'>
                    <img src={Anand} alt='Anand'/>
                    <div className='container'>
                        <h4><b>Mr. Anand Raj</b></h4>
                        <h6>Managing Director</h6>
                        <div className='box'><a className='button' href='#popout2'>Know More</a></div>
                    </div>
                </div>
            </div>

            <div id='popout2' className='overlay'>
                <div className='popout'>
                    <h4><b>Mr. Anand Raj</b></h4>
                    <a className="close" href="#">&times;</a>
                    <p>Mr. Anand Raj is a dynamic and dedicated young entrepreneur, committed to contributing to the nation's economic growth through his endeavors in the Import-Export sector. At the age of 25, he has already established connections with international clients and showcased his capabilities by successfully meeting various client requirements.</p>
                    <p>With his insightful leadership, the company has been achieving remarkable progress, and he remains poised to elevate the standards in the industry through his positive attitude and a blend of smart and hard work. Renowned for his unwavering commitments, he consistently proves his words through action. Following in his footsteps, the entire team collaborates seamlessly, working towards the shared goal of expanding the business and establishing a global presence.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default aboutUs